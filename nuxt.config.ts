// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxtjs/supabase',
    'nuxt-security'
  ],
  css: ['~/assets/css/main.css'], 
  supabase: {
    redirect: false, 
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    serviceKey: process.env.SUPABASE_SERVICE_KEY, 

  }, 
  security: {
    corsHandler: {
        origin: '*'
    }
  },
})