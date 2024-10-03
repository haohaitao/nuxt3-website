// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/",
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1.0,user-scalable=0",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [],
      style: [],
      script: [],
      noscript: [],
    },
  },
  css: [
    "~/assets/font/iconfont.css",
    "~/assets/animate.css",
    "~/assets/highlight.css",
  ],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      isClient: true,
    },
    app: {
      BASE_URL: "https://www.haoht123.com",
    },
  },
  nitro: {},
  modules: ["@element-plus/nuxt"],
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/pro-solid-svg-icons",
      "@fortawesome/pro-regular-svg-icons",
      "@fortawesome/pro-light-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },
});
