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
																					primary: "#E7A339",
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
});