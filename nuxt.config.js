export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css', 
  '@/assets/css/playfair.css', 
  '@/assets/css/nunito.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'fBeOhFcADZuvvHQinaiQ9wtt',
        apiOptions: {
          region: '' // Set 'US" if your space is created in US region (EU default)
        }
      },
    ],
    '@nuxtjs/tailwindcss',
  ]
})
