<script setup>
    const userState = useState('user');
    
    //const user = useSupabaseUser();
    const supabase = useSupabaseClient();

    const signOut = () => {
        supabase.auth.signOut();
        userState.value = null;
        navigateTo('/login');
        
    }

    const user_menu_items = [
        [{ label: 'Profile', icon: 'i-lucide-user', to: '/profile' }],
        [{ label: 'Logout', icon: 'i-lucide-log-out', click: signOut }]
    ];

    

</script>

<template>
    <div class='flex flex-col min-h-screen align-stretch'>  
        <div class='flex bg-white sticky top-0 justify-between items-center h-12 border-b border-gray-200 px-5'>
            <span>
                <img src="/images/logos/moody-prep-logo-stacked.png" class="h-8" />
            </span>
            <span class="flex gap-5 items-center">
                <ULink active-class="text-primary" active to="/sat-problems">Problems</ULink>
                <ULink active-class="text-primary" active to="/sat">SAT Guide</ULink>
                <span v-if="userState">
                    <UDropdown :items="user_menu_items" :popper="{ placement: 'bottom-start' }">
                        <UAvatar :alt="userState.name" size="md" />
                    </UDropdown>
                </span>
                <span v-else>
                    <UButton to="/login">Login</UButton>
                </span>
            </span>
        </div>
        <div class="grow">
            <slot />
        </div>
    </div>
</template>

