<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UModals />
  </div>
</template>

<script setup>
  const userState = useState('user');
  const user = useSupabaseUser();


  const getUserProfile = async () => {
    if (!userState.value?.id) return;
    
    const client = useSupabaseClient();
    const { data, error } = await client
      .from('profiles')
      .select('*')
      .eq('id', userState.value.id)
      .single();
      
    if (!error && data) {
      userState.value = {
        ...userState.value,
        profile: data
      };
    }
  }
  
  // Watch for user changes
  watch(user, async (newUser) => {
    if (newUser) {
      userState.value = newUser;
      await getUserProfile();
    }
  }, { immediate: true });

  
</script>
