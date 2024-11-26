<script setup>

const file_path = ref('');

const from_test = ref(false);

const problem_count = ref(0);

const complete_msg = ref('');

const addProblems = async () => {
    const resp = await $fetch('/api/add/sat-problems-from-sb-pdf', 
        {
        method: 'POST',
        body: {
            file_path: file_path.value,
            from_test: from_test.value,
            problem_count: problem_count.value
        }
    }
    )
    complete_msg.value = resp;
}
</script>

<template>
    <div class="p-8">
        <div class="pb-2">
            <h1 class="text-lg font-bold">Add Problems from Supabase PDF</h1>
        </div>
        <div class="pb-2">
            <div class="field_label">File path:</div>
            <UInput v-model="file_path" label="Supabase file path" placeholder="File url" />
        </div>
        <div class="pb-2">
            <div class="field_label">Problem count:</div>
            <UInput v-model="problem_count" type="number" label="Expected problem count" />
        </div>
        <div class="pb-2">
            <UCheckbox v-model="from_test" label="From test" />
        </div>
        <div>
            <UButton @click="addProblems">Add Problems</UButton>
        </div>
        <div class="pb-2">
            {{ complete_msg }}
        </div>
    </div>
</template>