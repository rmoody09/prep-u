<script setup>
    const userState = useState('user');
    
    //const user = useSupabaseUser();
    const supabase = useSupabaseClient();

    const signOut = () => {
        supabase.auth.signOut();
        userState.value = null;
        navigateTo('/login');
        
    }
    const menu_key = ref(0);

    const user_menu_items = ref([]);
    if (userState.value) {
        user_menu_items.value = [
            [{ label: 'Dashboard', icon: 'i-lucide-layout-dashboard', to: '/dashboard' }],
            [{ label: 'Logout', icon: 'i-lucide-log-out', click: signOut }]
        ];
    }
    const checkIfAdmin = async () => {
        const user_id = userState.value.id;
        //const client = useSupabaseClient();
        const { data, error } = await supabase.from('profiles').select('*').eq('id', user_id);
        if (error) {return false;}
        let is_admin = false;
        if (data[0].admin_role) {
            is_admin = true;
            user_menu_items.value = [
                [{ label: 'Dashboard', icon: 'i-lucide-layout-dashboard', to: '/dashboard' }],
                [{ label: 'Admin Dashboard', icon: 'i-lucide-user', to: '/admin' }],
                [{ label: 'Logout', icon: 'i-lucide-log-out', click: signOut }]
            ];
            menu_key.value += 1;
        }
        return is_admin;
    }

    onMounted(async () => {
        await checkIfAdmin();
    });

    

</script>

<template>
    <div class='flex flex-col min-h-screen align-stretch'>  
        <div class='flex bg-white backdrop-filter backdrop-blur-sm bg-opacity-70 z-10 sticky top-0 justify-between items-center h-12 border-b border-gray-200 px-5'>
            <span>
                <img src="/images/logos/PrepULogo.png" class="h-8" />
            </span>
            <span class="flex gap-5 items-center">
                <ULink active-class="text-primary" active to="/sat">SAT Guide</ULink>
                <span v-if="userState">
                    <UDropdown :key="menu_key" :items="user_menu_items" :popper="{ placement: 'bottom-start' }">
                        <UAvatar :alt="userState.user_metadata.name" size="md" />
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
