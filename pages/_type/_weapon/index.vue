<template>
	<div class="">
		<header class="bg-blue-200">
			<div class="container mx-auto flex flex-col justify-center pt-10 pb-8">
				<breadcrumb :crumbs="crumbs" class="text-white uppercase font-bold" />
				<h1 class="text-6xl text-white uppercase font-rajdhani font-bold leading-none">{{ weapon.name }}</h1>
			</div>
		</header>
		<div class="container mx-auto">
			<div class="pt-4 flex -mx-4">
				<div class="w-1/3 px-4">
					<div class="border border-gray-600 py-8 px-4">
						<img :src="weapon.picture.url" :alt="weapon.name" class="w-full" />
					</div>
				</div>
				<div class="w-2/3 px-4">
					<div class="mb-4">
						<h1>Available skins</h1>
						<weapon-skin v-for="skin in skins" :key="skin.id" :skin="skin" />
					</div>
					<div class="mb-4">
						<h1>Unavailable skins</h1>
						<weapon-skin v-for="skin in unavailables" :key="skin.id" :skin="skin" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types/app'
import { partition } from 'lodash-es'
import { Weapon, WeaponType, WeaponSkin as Skin } from '~/types/Weapon'
import Breadcrumb from '~/components/Breadcrumb.vue'
import WeaponSkin from '~/components/WeaponSkin.vue'

interface IData {
	weapon: Weapon|null
}

export default Vue.extend({
	name: 'WeaponIndex',
	components: { Breadcrumb, WeaponSkin },
	async asyncData ({ $strapi, params }: Context) {
		const [types, weapons]: [WeaponType[], Weapon[]] = await Promise.all([
			$strapi.find('weapon-types', { slug: params.type }),
			$strapi.find('weapons', { slug: params.weapon }),
		])

		const type = types.shift()
		const weapon = weapons.shift()
		const [skins, unavailables] = partition(weapon?.weapon_skins, (skin: Skin) => skin.available)

		return {
			weapon,
			type,
			skins,
			unavailables,
			crumbs: [
				{ name: 'index', title: 'home' },
				{ name: 'type', title: type?.name, params: { type: type?.slug } },
			],
		}
	},
	data: (): IData => ({ weapon: null }),
	head () {
		const title: string = this.weapon?.name || ''

		return {
			title,
			meta: [
				{ hid: 'og:title', property: 'og:title', content: title },
				{ hid: 'og:image', property: 'og:image', content: this.weapon?.picture.url || '' },
				{ hid: 'twitter:title', property: 'twitter:title', content: title },
				{ hid: 'twitter:image', property: 'twitter:image', content: this.weapon?.picture.url || '' },
			],
			link: [
				{ hid: 'canonical', rel: 'canonical', href: `${process.env.BASE_URL}${this.$route.path}` },
			],
		}
	},
})
</script>
