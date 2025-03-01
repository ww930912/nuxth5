// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["normalize.css", "@/assets/css/global.scss"],
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/seo",
  ],

  ssr: false,

  devServer: {
    port: 3001,
  },

  // 国际化
  i18n: {
    // default i18n
    defaultLocale: "zh",
    // router type
    // strategy: "no_prefix",
    strategy: "prefix_except_default",
    locales: [
      { code: "zh", language: "zh-CN", file: "zh.json" },
      { code: "en", language: "en-US", file: "en.json" },
      { code: "pt", language: "pt-BR", file: "pt.json" },
    ],
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },
  appId: "sports",
  app: {
    // pageTransition: { name: "page", mode: "out-in" },
    teleportId: "teleportId",
    rootId: "root",
    pageTransition: false,
    layoutTransition: false,
    head: {
      title: "BC.GAME: Crypto Casino Games",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no,initial-scale=1,viewport-fit=cover",
        },
        {
          name: "keywords",
          content:
            "Crypto Casino Games, Bitcoin Crash Game, Bitcoin Gambling Games, Crypto Games, Bc Game, Bcgame, Crypto Gambling Games",
        },
        {
          name: "description",
          content: "Best Crypto Casino.Biggest crypto crash game.Provably fair",
        },
        // Open Graph
        {
          property: "og:title",
          content: "BC.GAME: Crypto Casino Games",
        },
        {
          property: "og:description",
          content: "Best Crypto Casino.Biggest crypto crash game.Provably fair",
        },
        { property: "og:type", content: "product" },
        { property: "og:url", content: "https://bc.game" },
        { property: "og:image", content: "https://bc.game/share_image.jpg" },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "BC.GAME: Crypto Casino Games",
        },
        {
          name: "twitter:description",
          content: "Best Crypto Casino.Biggest crypto crash game.Provably fair",
        },
        {
          name: "twitter:image",
          content: "https://bc.game/share_image.jpg",
        },
      ],
      templateParams: {
        separator: "·",
      },
    },
  },

  // SEO
  site: {
    // url: "https://nuxtseo.com",
    url: "https://nuxts.netlify.app",
    name: "Nuxt SEO",
    description: "Welcome to my awesome site!",
  },

  schemaOrg: {
    identity: "Organization",
  },

  seo: {
    meta: {
      description: "This is a demo of Nuxt SEO showcasing all of the modules.",
      themeColor: [
        { content: "#000", media: "(prefers-color-scheme: dark)" },
        { content: "#fff", media: "(prefers-color-scheme: light)" },
      ],
    },
  },

  robots: {
    UserAgent: "*",
    Disallow: "/user",
  },

  sitemap: {
    hostname: "https://nuxts.netlify.app",
    autoLastmod: true,
  },

  // 服务器
  nitro: {
    preset: "netlify", // 适配 Netlify Functions
  },
});
