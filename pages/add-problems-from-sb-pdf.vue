<script setup>

const file_path = ref('');

const addProblems = () => {
    const resp = $fetch('/api/add-problems-from-sb-pdf', 
        {
        method: 'POST',
        body: {
            file_path: file_path.value
        }
    }
    )
}
</script>

<template>
    <div class="pb-2">
        <h1>Add Problems from Supabase PDF</h1>
    </div>
    <div class="pb-2">
        <UInput v-model="file_path" label="Supabase file path" />
    </div>
    <div>
        <UButton @click="addProblems">Add Problems</UButton>
    </div>
</template>