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
</script>
