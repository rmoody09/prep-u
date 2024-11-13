
export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser()
    console.log('auth middleware');
    console.log('user', user.value);
    
    if (!user.value) {
      return navigateTo('/login')
    }
    console.log('user email', user.value.email);
  })