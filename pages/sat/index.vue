<script setup>
// Server-side redirect
onServerPrefetch(() => {
  return navigateTo('/sat/intro/about');
})

// Client-side redirect
onMounted(() => {
  navigateTo('/sat/intro/about');
})
</script>

<template>
</template>

