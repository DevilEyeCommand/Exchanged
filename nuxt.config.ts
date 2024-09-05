/** @format */

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@ant-design-vue/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "nuxt-echarts",
  ],

  compilerOptions: {
    resolveJsonModule: true,
  },

  googleFonts: {
    families: {
      Kanit: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: "#033E8A",
            // #033E8A
          },
        },
      },
    },
  },

  colorMode: {
    preference: "light",
    dataValue: "theme",
  },

  server: {
    host: "0.0.0.0",
  },

  compatibilityDate: "2024-08-31",

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [{ name: "description", content: "Nuxt 3" }],
      title: "Exchanged",
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.ico" }],
    },
  },
});
