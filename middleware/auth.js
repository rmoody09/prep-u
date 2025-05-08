
export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser()
    if (!user || !user.value) {
        return navigateTo('/login')
    }
  })