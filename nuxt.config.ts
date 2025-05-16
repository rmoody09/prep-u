// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxtjs/supabase'
  ],
  css: ['~/assets/css/main.css'], 
  fonts: {
    families: [
      {
        name: 'Lexend',
        provider: 'google',
        type: 'variable'
      },
      {
        name: 'Inter',
        provider: 'google',
        type: 'variable'
      }
    ]
  },
  supabase: {
    redirect: true, 
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    serviceKey: process.env.SUPABASE_SERVICE_KEY, 
    redirectOptions: {
      login: '/dashboard',
      callback: '/confirm',
      include: undefined,
      exclude: ['/', '/login', '/signup', '/sat', '/sat/*'],
      cookieRedirect: true,
    }
    //supabase note: in order to do redirects, need redirect set to true, but then it will univerally require users be logged in unless the url is on the exclude list
  }, 
  build: {
    transpile: ['katex']
  },
  security: {
    corsHandler: {
        origin: '*'
    }
  }
})