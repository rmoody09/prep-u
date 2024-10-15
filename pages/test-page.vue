<script setup>
    const resp = await useFetch('/api/get/test-fetch')
console.log('data');resp
console.log(resp);
</script>

<template>
    <div>
        <h1>Test Page</h1>
    </div>
</template>