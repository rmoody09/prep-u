<script setup>

const file_path = ref('');

const from_test = ref(false);

const problem_count = ref(0);

const complete_msg = ref('');

const addProblems = async () => {
    const resp = await $fetch('/api/add-problems-from-sb-pdf', 
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
    <div class="pb-2">
        <h1>Add Problems from Supabase PDF</h1>
    </div>
    <div class="pb-2">
        <UInput v-model="file_path" label="Supabase file path" />
    </div>
    <div class="pb-2">
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
</template>