<template>
    <div class='flex flex-col min-h-screen align-stretch'>  
        <div class='flex bg-white sticky top-0 justify-evenly items-center h-12 border-b border-gray-200'>
            <span>Moody Prep</span>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/add-problem">Add Problem</NuxtLink>
            <NuxtLink to="/sat">SAT Guide</NuxtLink>
            <UButton>Login</UButton>
        </div>
        <div class="grow">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>