<script setup>

const json_file = ref('');

const addProblems = () => {
    const resp = $fetch('/api/add-problems-from-json-file', 
        {
        method: 'POST',
        body: {
            json_file: json_file.value
        }
    }
    )
}

//example file location: assets/problem-json-files/math/advanced-math/nonlinear-functions-test.js

</script>

<template>
    <div>
        <h1>Add Problems from JSON File</h1>
    </div>
    <div>
        <UInput v-model="json_file" label="JSON file location" />
    </div>
    <div>
        <UButton @click="addProblems">Add Problems</UButton>
    </div>
</template>