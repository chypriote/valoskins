import './vuex'

declare class StrapiInstance {
	register (data: any): any
	login (data: any): any
	forgotPassword (data: any): any
	resetPassword (data: any): any
	sendEmailConfirmation (data: any): any
	logout (): any
	fetchUser (): any
	setUser (user: any): any
	find (entity: any, searchParams?: any): any
	count (entity: any, searchParams?: any): any
	findOne (entity: any, id: any): any
	create (entity: any, data: any): any
	update (entity: any, id: any, data: any): any
	delete (entity: any, id: any): any
	getToken (): any
	setToken (jwt: string): any
	clearToken (): any
}

type Result = (Object[] & {
  0: ('parallel' | 'sequential');
});

declare module '@nuxt/vue-app' {
  interface Context {
    $strapi: StrapiInstance
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    $strapi: StrapiInstance
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $strapi: StrapiInstance
  }
}
