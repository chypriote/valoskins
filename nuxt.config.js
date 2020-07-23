require('dotenv').config()

export default {
	mode: 'universal',
	target: 'static',
	globalname: 'valoskins',
	components: false,
	telemetry: false,
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', type: 'image/x-icon', href: '//fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap' },
		],
	},
	css: ['~/assets/css/app.css'],
	plugins: [],
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/stylelint-module',
		'@nuxtjs/tailwindcss',
	],
	modules: ['@nuxtjs/dotenv', '@nuxtjs/pwa', '@nuxtjs/strapi', '@nuxtjs/svg'],
	build: {
		extend (config) {
			config.resolve.alias.vue = 'vue/dist/vue.esm.js'
		},
		transpile: ['lodash-es'],
		postcss: {
			parser: require('postcss-comment'),
			plugins: {
				'postcss-nested': {},
				'postcss-custom-properties': {},
				'postcss-color-mod-function': {},
			},
		},
	},
}
