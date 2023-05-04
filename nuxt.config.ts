// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({


	/**
	 * @see https://nuxtjs.org/docs/configuration-glossary/configuration-alias/
	 */
	css: [
		'~/assets/fonts/FiraSans/stylesheet.css',
		'~/assets/css/vendor.scss',
		'~/assets/css/main.scss'
	],

	/**
	 * @see https://nuxt.com/docs/guide/directory-structure/components
	 */
	components: [
		'@/components'
	],

	/**
	 * @see https://nuxtjs.org/docs/configuration-glossary/configuration-alias/
	 */
	alias: {
		'@': './',
	},

	modules: [
		'nuxt-icons',
	],

	plugins: [

	],

	vite: {
		css: {
			preprocessorOptions: {
				/**
				 * @see https://stackoverflow.com/questions/70547375/global-sass-import-usage-nuxt-3-static-assets
				 */
				sass: {
					additionalData: `
						@import "@/assets/css/mixins/index.sass";
					`,
				},
			},
		},
	},


})
