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
	css: ['reset-css', 'hint.css', '~/assets/css/app.css'],
	plugins: [
		'~/plugins/filters',
		'~/plugins/api',
	],
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/stylelint-module',
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
				'postcss-import': {},
				'postcss-nested': {},
				'postcss-custom-media': {},
				'postcss-custom-properties': {},
				'postcss-color-mod-function': {},
			},
		},
	},
}
