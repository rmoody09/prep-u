<script setup>
    const userState = useState('user');
    

    

</script>

<template>
    <div class='flex flex-col min-h-screen align-stretch'>  
        <div class='flex bg-white backdrop-filter backdrop-blur-sm bg-opacity-90 z-10 sticky top-0 justify-between items-center h-16 border-b border-gray-200 px-5'>
            <span>
                <img src="/images/logos/PrepULogo.png" class="h-8" />
            </span>
            <span class="flex gap-5 items-center">
                <ULink active-class="text-gray-600 hover:text-primary transition duration-300" to="#features">Features</ULink>
                <ULink active-class="text-gray-600 hover:text-primary transition duration-300" to="#testimonials">Testimonials</ULink>
                <ULink active-class="text-gray-600 hover:text-primary transition duration-300" to="#pricing">Pricing</ULink>
                <ULink active-class="text-gray-600 hover:text-primary transition duration-300" to="#faq">FAQ</ULink>
            </span>
            <span>
                <UButton to="/sat-guide">Get Started</UButton>
            </span>
        </div>
        <div class="grow">
            <slot />
        </div>
    </div>
</template>

