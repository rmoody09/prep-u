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
//this file name is a misnomer, actually using js files rather than json
//also this page is mostly obsolete, as I now have a page for having it directly take a pdf and process it and submit the problems to the database
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