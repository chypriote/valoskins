import Vue from 'vue'
import { Api } from '~/plugins/api'
import { ModuleConfiguration, StrapiInstance } from '~/types/strapi'

declare module '*.vue' {
	export default Vue
}

declare module 'vue/types/vue' {
	interface Vue {
		$api: Api
	}
}

declare module 'vuex/types/index' {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface Store<S> {
		$api: Api
	}
}

declare module '@nuxt/types' {
	interface Context {
		readonly $api: Api
	}
}
