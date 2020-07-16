export default {
	mode: 'universal',
	target: 'static',
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || '',
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	css: [],
	plugins: [],
	components: false,
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/stylelint-module',
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss',
	],
	modules: [
		'@nuxtjs/dotenv',
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxt/content',
		'@nuxtjs/svg',
	],
	axios: {},
	/*
	 ** Content module configuration
	 ** See https://content.nuxtjs.org/configuration
	 */
	content: {},
	build: {
		extend(config) {
			config.resolve.alias.vue = 'vue/dist/vue.esm.js'
		},
	},
}
