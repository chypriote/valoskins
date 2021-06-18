import { head, pwa } from './config/meta'
require('dotenv').config()

export default {
	target: 'static',
	globalname: 'valoskins',
	components: false,
	telemetry: false,
	head,
	pwa,
	generate: {
		concurrency: 200,
		interval: 1000,
	},
	css: ['hint.css', '~/assets/css/app.css'],
	plugins: [
		'~/plugins/filters',
		'~/plugins/api',
	],
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
