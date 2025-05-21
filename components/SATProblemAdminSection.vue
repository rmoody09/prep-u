<script setup>
const props = defineProps({
    problem: {
        type: Object,
        required: true
    }
});

const userState = useState('user');
const category = ref(null);
const client = useSupabaseClient();

const difficultyText = computed(() => {
    switch (props.problem.difficulty) {
        case 1: return 'Easy';
        case 2: return 'Medium';
        case 3: return 'Hard';
        default: return 'Unknown';
    }
});

// Fetch category information
const fetchCategory = async () => {
    if (!props.problem.category) return;
    const { data, error } = await client
        .from('problem_categories')
        .select('tag')
        .eq('id', props.problem.category)
        .single();
    
    if (data) {
        category.value = data;
    }
};

// Fetch category when component mounts
onMounted(() => {
    fetchCategory();
});

const unapproveProblem = async () => {
    const resp = await $fetch('/api/admin/unapprove/sat-problem/' + props.problem.id, {
        method: 'POST'
    });
    if (resp.error) {return;}
    props.problem.manually_approved = false;
    props.problem.expert_approved = false;
}

const approveProblem = async () => {
    const resp = await $fetch('/api/admin/approve/sat-problem/' + props.problem.id, {
        method: 'POST'
    });
    if (resp.error) {return;}
    props.problem.manually_approved = true;
    if (userState.value.profile.admin_role == 'super_admin') {
        props.problem.expert_approved = true;
    }
}
</script>

<template>
    <div v-if="userState.profile?.admin_role" class="mt-10 border border-indigo-400 rounded-md">
        <h3 class="flex items-center gap-2 font-bold text-lg p-4 bg-indigo-50">
            <UIcon name="i-lucide-user-cog" /> <span>Admin Actions</span>
        </h3>
        <div class="p-4">
            <!-- Problem Information -->
            <div class="mb-6 space-y-2">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <span class="font-semibold">Problem ID: </span>
                        <span>{{ problem.id }}</span>
                    </div>
                    <div>
                        <span class="font-semibold">Source: </span>
                        <span>{{ problem.source }}</span>
                    </div>
                    <div>
                        <span class="font-semibold">Source ID: </span>
                        <span>{{ problem.source_question_id }}</span>
                    </div>
                    <div>
                        <span class="font-semibold">Skill: </span>
                        <span>{{ problem.cb_skill }}</span>
                    </div>
                    <div>
                        <span class="font-semibold">Category: </span>
                        <span>{{ category?.tag || 'Loading...' }}</span>
                    </div>
                    <div>
                        <span class="font-semibold">Difficulty: </span>
                        <span>{{ difficultyText }}</span>
                    </div>
                </div>
            </div>

            <!-- Approval Status -->
            <div class="space-y-2">
                <div v-if="problem.manually_approved" class="flex items-center gap-2">
                    <UIcon variant="outline" name="i-lucide-check" /> 
                    <span>Manually approved</span>
                </div>
                <div v-if="problem.expert_approved" class="flex items-center gap-2">
                    <UIcon variant="outline" name="i-lucide-check" /> 
                    <span>Super Admin approved</span>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="pt-4">
                <UButton variant="outline" :to="`/admin/edit/sat-problem/${problem.id}`">Edit</UButton>
            </div>
            <div class="pt-4" v-if="problem.manually_approved || problem.expert_approved">
                <UButton variant="outline" @click="unapproveProblem">Unapprove</UButton>
            </div>
            <div class="pt-4" v-if="userState.profile.admin_role == 'super_admin' && !problem.expert_approved">
                <UButton variant="outline" @click="approveProblem">Approve</UButton>
            </div>
            <div class="pt-4" v-else-if="!problem.manually_approved">
                <UButton variant="outline" @click="approveProblem">Approve</UButton>
            </div>
        </div>
    </div>
</template>
