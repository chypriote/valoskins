<template>
	<div>
		<header class="bg-blue-200">
			<div class="container mx-auto flex items-center justify-between pt-10 pb-8">
				<h1 class="text-6xl text-white uppercase font-rajdhani font-bold leading-none">{{ weapon.name }}</h1>
				<div class="w-1/3 px-4">
					<img :src="weapon.picture.url" :alt="weapon.name" class="w-full" />
				</div>
			</div>
		</header>
		<div class="container mx-auto">
			<div class="skins-filter">
				<input type="text">
				<select>
					<option v-for="(rarity, index) in Rarity" :key="`rarity-${index}`" :value="rarity">{{ rarity |ucfirst }}</option>
				</select>
			</div>
			<div class="skins-grid">
				<div v-for="skin in skins" :key="skin.id" class="skin-cell">
					<weapon-skin :skin="skin" />
				</div>
				<div class="mb-4">
					<h1>Unavailable skins</h1>
					<weapon-skin v-for="skin in unavailables" :key="skin.id" :skin="skin" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types/app'
import { partition } from 'lodash-es'
import { Weapon, WeaponType, WeaponSkin as Skin, rarityOrder, Rarity } from '~/types/Weapon'
import WeaponSkin from '~/components/WeaponSkin.vue'

interface IData {
	weapon: Weapon|null
	type?: WeaponType
	skins: Skin[]
	unavailables?: Skin[]
	Rarity: typeof Rarity
}

export default Vue.extend({
	name: 'WeaponIndex',
	components: { WeaponSkin },
	async asyncData ({ $api, params }: Context) {
		const [type, weapon]: [WeaponType, Weapon] = await Promise.all([
			$api.getWeaponTypeBySlug(params.type),
			$api.getWeaponBySlug(params.weapon),
		])

		const [skins, unavailables] = partition(weapon?.weapon_skins.sort((a: Skin, b: Skin) => rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity)), (skin: Skin) => skin.available)

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
	data: (): IData => ({ weapon: null, skins: [], Rarity }),
	// eslint-disable-next-line vue/order-in-components
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

<style scoped>
.skins-filter {
	display: flex;
}
.skins-grid {
	display: flex;
	flex-wrap: wrap;
	margin: 1rem -1rem;
	padding-top: 1rem;
}
.skin-cell {
	flex-basis: 50%;
	padding: 1rem;
	@media (min-width: 576px) {flex-basis: 50%;}
	@media (min-width: 768px) {flex-basis: 33%;}
	@media (min-width: 1024px) {flex-basis: 33%;}
	@media (min-width: 1280px) {flex-basis: 25%;}
}
</style>
