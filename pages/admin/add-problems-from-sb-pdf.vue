<script setup>
import { test_sections, cb_domains, cb_skills, getCbDomainLookup, getCbSkillLookup, getCbSkillsByDomain } from '~/assets/composables/SATProblemTypes';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getCbSectionSkillIDs, getCbSkillIDs } from '~/assets/composables/SATProblemTypes';
import { createClient } from '@supabase/supabase-js'

const adding_problems = ref(false);
const done_adding_problems = ref(false);
const progress_status_msg = ref('');
const progress_status_data = ref('');
const selected_section = ref(null);
const cb_domain_lookup = getCbDomainLookup();
const cb_skill_lookup = getCbSkillLookup();
const cb_skills_by_domain = getCbSkillsByDomain();

const cb_domain = ref('');
const select_cb_domain_options = ref([]);
const updateSelectCbDomainOptions = () => {
    if (selected_section.value) {
        select_cb_domain_options.value = cb_domains.filter(domain => domain.section == selected_section.value);
    } else {
        select_cb_domain_options.value = cb_domains;
    }
}
updateSelectCbDomainOptions();

const cb_skill = ref('');
const select_cb_skill_options = ref([...cb_skills]);
const updateSelectCbSkillOptions = () => {
    if (cb_domain.value) {
        select_cb_skill_options.value = cb_skills_by_domain[cb_domain.value];
    } else if (selected_section.value) {
        select_cb_skill_options.value = cb_skills.filter(skill => skill.section == selected_section.value);
    } else {
        select_cb_skill_options.value = cb_skills;
    }
}
updateSelectCbSkillOptions();

watch(selected_section, () => {
    updateSelectCbSkillOptions();
    updateSelectCbDomainOptions();
    if (cb_domain.value) {
        if (selected_section.value != cb_domain_lookup[cb_domain.value].section) {
            cb_domain.value = null;
        }
    }
    if (cb_skill.value) {
        if (selected_section.value != cb_skill_lookup[cb_skill.value].section) {
            cb_skill.value = null;
        }
    }
});
watch(cb_domain, () => {
    updateSelectCbSkillOptions();
    if (cb_domain.value) {
        selected_section.value = cb_domain_lookup[cb_domain.value].section;
        if (cb_skill.value) {
            if (cb_skill_lookup[cb_skill.value].domain != cb_domain.value) {
                cb_skill.value = null;
            }
        }
    }
});
watch(cb_skill, () => {
    if (cb_skill.value) {
        cb_domain.value = cb_skill_lookup[cb_skill.value].domain;
        selected_section.value = cb_skill_lookup[cb_skill.value].section;
    }
});

const file_url = ref('');

const from_test = ref(false);

const problem_count = ref(0);

const complete_msg = ref('');
const is_error = ref(false);
const is_success = ref(false);
const error_msg = ref('');
const success_summary = ref('');
const identified_problem_ids = ref([]);
const processed_question_ids = ref([]);
const failed_question_ids = ref([]);
const unparsed_question_ids = ref([]);

const jobId = ref(null);
const status = ref('pending');
const progress = ref(0);
const error = ref(null);
const supabase = useSupabaseClient()
const subscription = ref(null)




function subscribeToTaskStatus(id) {
  console.log('subscribing to task status', id)
  
  // Unsubscribe from any existing subscription first
  if (subscription.value) {
    subscription.value.unsubscribe()
  }
  
  subscription.value = supabase
    .channel(`task_status_${id}`) // Give unique channel name
    .on(
      'postgres_changes',
      {
        event: '*', // Listen to all events (INSERT, UPDATE, DELETE)
        schema: 'public',
        table: 'task_status',
        filter: `id=eq.${id}`,
      },
      (payload) => {
        console.log('task status update received:', payload)
        const data = payload.new;
        status.value = data.status

        if (data.status === 'completed') {
          console.log('completed')
          adding_problems.value = false
          done_adding_problems.value = true
          success_summary.value = JSON.stringify(data.data.summary)
          identified_problem_ids.value = data.data.identified_problem_ids
          processed_question_ids.value = data.data.processed_question_ids
          failed_question_ids.value = data.data.failed_question_ids
          unparsed_question_ids.value = data.data.unparsed_question_ids
          is_success.value = true
          subscription.value.unsubscribe()
        } else if (data.status === 'error') {
          error.value = data.data?.error || 'Job failed'
          subscription.value.unsubscribe()
          adding_problems.value = false
          done_adding_problems.value = true
          is_error.value = true
          error_msg.value = error.value
          identified_problem_ids.value = []
          processed_question_ids.value = []
          failed_question_ids.value = []
        } else {
            progress_status_msg.value = data.message
            progress_status_data.value = JSON.stringify(data.data)
        }
      }
    )
    .subscribe((status, error) => {
      if (error) {
        console.error('Subscription error:', error)
      } else {
        console.log('Subscribed successfully:', status)
      }
    })
}


const addProblems = async () => {
    adding_problems.value = true;
    is_error.value = false;
    is_success.value = false;
    error_msg.value = '';
    success_summary.value = '';
    identified_problem_ids.value = [];
    processed_question_ids.value = [];
    failed_question_ids.value = [];
    unparsed_question_ids.value = [];
    let fetch_url = '/api/admin/add/sat-problems-from-pdf';
    console.log('add problems from sb pdf');
    const resp = await $fetch(fetch_url, 
        {
        method: 'POST',
        body: {
            file_url: file_url.value,
            from_test: from_test.value,
            problem_count: problem_count.value, 
            test_section: selected_section.value ? selected_section.value : null,
            cb_domain: cb_domain.value ? cb_domain.value : null,
            cb_skill: cb_skill.value ? cb_skill.value : null
        }
    }
    )
    console.log('resp', resp);

    if (resp.status == 'error') {
        is_error.value = true;
        error_msg.value = resp.message;
        identified_problem_ids.value = resp.identified_problem_ids;
        processed_question_ids.value = resp.processed_question_ids;
        failed_question_ids.value = resp.failed_question_ids;
        unparsed_question_ids.value = resp.unparsed_question_ids;
        return;
    }
    console.log('resp', resp);
    jobId.value = resp.jobId;
    console.log('jobId', jobId.value);
    subscribeToTaskStatus(jobId.value);
}

onUnmounted(() => {
  if (subscription.value) {
    subscription.value.unsubscribe()
  }
})
</script>

<template>
    <div class="p-8">
        <div v-if="!adding_problems && !done_adding_problems">
            <div class="pb-2">
                <h1 class="text-lg font-bold">Add Problems from Supabase PDF</h1>
            </div>
            <div class="pb-2">
                <div class="field_label">Supabase file url:</div>
                <UInput v-model="file_url" label="Supabase file path" placeholder="File url" />
            </div>
            <div class="pb-2">
                <div class="field_label">Problem count:</div>
                <UInput v-model="problem_count" type="number" label="Expected problem count" />
            </div>
            <div class="pb-2">
                <UCheckbox v-model="from_test" label="From test" />
            </div>
            <div class="pb-2">
                <div class='field_label'>Test Section</div>
                <span>
                    <USelectMenu v-model="selected_section" :options="test_sections" placeholder="Test Section" value-attribute="id" option-attribute="label" />
                </span>
            </div> 
            <div class="pb-2">
                <div class='field_label'>College Board Domain</div>
                <span>
                    <USelectMenu v-model="cb_domain" :options="select_cb_domain_options" placeholder="College Board Domain" value-attribute="id" option-attribute="label" />
                </span>
            </div>  
            <div class="pb-4">
                <div class='field_label'>CollegeBoard Skill</div>
                <span>
                    <USelectMenu v-model="cb_skill" :options="select_cb_skill_options" placeholder="College Board Skill" value-attribute="id" option-attribute="label" />
                </span>
                
            </div>
            <div class="pb-2">
                <UButton @click="addProblems">Add Problems</UButton>
            </div>
        </div>
        <div v-if="adding_problems">
            <div class="pb-2">
                <UProgress animation="carousel"  />
            </div>
            <div class="pb-2">  
                Processing problems...this could take a few minutes.
            </div>
            <div class="pb-2 text-wrap max-w-full border-2 border-gray-300 rounded-md p-2" v-if="progress_status_msg">
                {{ progress_status_msg }}
                <div v-if="progress_status_data" class="text-wrap max-w-full border-2 border-gray-300 rounded-md p-2 break-words whitespace-pre-wrap">
                    {{ progress_status_data }}
                </div>
            </div>
        </div>
        <div v-if="done_adding_problems">
            <div class="pb-2">
                <div v-if="is_success">
                    <div class="font-bold font-large pb-2">
                        Processing Complete
                    </div>
                    <div v-if="problem_count > 0 && processed_question_ids.length != problem_count">
                        <div class="pb-2 text-red-500">
                            Warning: The number of problems processed does not match the expected number of problems. Please compare the list of processed question ids with the ones in the PDF you submitted, and manually add the missing problems.
                        </div>
                    </div>
                    <div>
                        <div>
                            {{ success_summary }}
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="font-bold font-large pb-2">
                        Error Processing Problems
                    </div>
                    {{ error_msg }}
                </div>
                <div>
                    <div>
                        <div>Identified Problem IDs:</div>
                        <div>{{ identified_problem_ids.join(', ') }}</div>
                    </div>
                    <div>
                        <div>Processed Question IDs:</div>
                        <div>{{ processed_question_ids.join(', ') }}</div>
                    </div>
                    <div>
                        <div>Failed Question IDs:</div>
                        <div>{{ failed_question_ids.join(', ') }}</div>
                    </div>
                    <div>
                        <div>Unparsed Question IDs:</div>
                        <div>{{ unparsed_question_ids.join(', ') }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>