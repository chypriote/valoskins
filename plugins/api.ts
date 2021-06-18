import { Context, Plugin } from '@nuxt/types'
import { StrapiInstance } from '~/types/strapi'
import { SkinCollection, Weapon, WeaponSkin, WeaponType } from '~/types/Weapon'

export class Api {
	private $strapi: StrapiInstance

	constructor($strapi: StrapiInstance) {
		this.$strapi = $strapi
	}
	async getWeaponTypeBySlug (slug: string): Promise<WeaponType> {
		const types = await this.$strapi.find('weapon-types', { slug })

		return types[0]
	}
	async getWeaponBySlug (slug: string): Promise<Weapon> {
		const weapons = await this.$strapi.find('weapons', { slug })

		return weapons[0]
	}
	async getSkinCollectionBySlug (slug: string): Promise<SkinCollection> {
		const collections = await this.$strapi.find('skin-collections', { slug })

		return collections[0]
	}
	async getSkinBySlugAndWeapon (slug: string, weapon: number): Promise<WeaponSkin> {
		const skins = await this.$strapi.find('weapon-skins', { slug, weapon })

		return skins[0]
	}
}


const plugin: Plugin = ({ $strapi }: Context, inject: any) => {
	inject('api', new Api($strapi))
}

export default plugin
