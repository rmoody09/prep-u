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
  if (user.value) {
    userState.value = user.value;
  }


  const getUserProfile = async () => {
    const client = useSupabaseClient();
    const { data, error } = await client.from('profiles').select('*').eq('id', userState.value.id);
    if (error) {return;}
    userState.value.profile = data[0];
  }

  useAsyncData('getUserProfile', () => {
      if (userState.value) {
        getUserProfile();
      }
    },
    {lazy: true}
  );
</script>
