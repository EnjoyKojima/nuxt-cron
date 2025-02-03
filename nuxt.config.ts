// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare_module",
    experimental: {
      tasks: true,
    },
    scheduledTasks: {
      '* * * * *': ['now'] // 1分ごとに実行
    }
  },

  modules: ["nitro-cloudflare-dev"]
})