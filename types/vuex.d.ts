import { StrapiInstance } from '~/types/index'

declare module 'vuex/types/index' {
	interface Store<S> {
		$strapi: StrapiInstance
  }
}
