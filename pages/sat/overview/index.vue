<script setup>
const route = useRoute()
definePageMeta({
  layout: 'sat-guide'
})
onServerPrefetch(() => {
  return navigateTo('/sat/overview/format');
})
</script>

<template>
    <div>
        
        

       
        
    </div>
</template>

<style scoped>
    h1 {
        @apply text-2xl font-bold;
    }
    .section-description {
        @apply text-sm text-gray-500;
    }
</style>