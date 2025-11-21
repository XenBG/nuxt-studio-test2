// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-11-20",
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxt/devtools",
    "@nuxt/content",
    "@nuxt/ui",
    "nuxt-studio",
  ],
  colorMode: {
    preference: 'light',
    fallback: 'light'
  },
  css: ["~/assets/css/main.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "bg",
      },
      bodyAttrs: {
        class: "bg-white",
      },
    },
  },
  studio: {
    route: process.env.STUDIO_ROUTE,
    repository: {
      provider: "github",
      owner: process.env.STUDIO_GITHUB_OWNER as string,
      repo: process.env.STUDIO_GITHUB_REPO as string,
      branch: process.env.STUDIO_GITHUB_BRANCH_NAME,
      rootDir: "",
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.SITE_URL,
      analyticsClientId: process.env.ANALYTICS_CLIENT_ID,
    },
  },
});
