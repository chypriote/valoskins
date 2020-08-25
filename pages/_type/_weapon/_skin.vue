<template>
	<div class="container mx-auto">
		<div class="flex -mx-2">
			<section class="w-3/4 px-2">
				<breadcrumb :crumbs="crumbs" class="text-black uppercase text-sm" />
				<div class="overflow-hidden bg-white shadow-md mb-4 flex">
					<skin-viewbox :skin="skin" :class="upgrades.length ? 'w-3/4' : ''" />
					<skin-upgrades v-if="upgrades.length" :upgrades="upgrades" class="w-1/4" />
				</div>

				<div class="overflow-hidden bg-white shadow-md mb-4 flex flex-col px-4 py-2">
					<div class="font-bold text-xl mb-2">Prices</div>
					<div class="flex items-center">
						<p class="text-xl leading-none">{{ skin.price }}</p>
						<img src="~/assets/img/valorantpoints.png" alt="Valorant Points" class="w-5 h-5 ml-1" />
					</div>
					<div class="flex items-center">
						<p class="text-xl leading-none">~{{ roundedPrice(skin.price / vpPrice) }} €</p>
						<img src="~/assets/img/valorantpoints.png" alt="Valorant Points" class="w-5 h-5 ml-1" />
					</div>

					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2">{{ skin.name }}</div>
						<p class="text-gray-700 text-base">
							{{ skin.name }}
						</p>
					</div>
				</div>
			</section>

			<aside class="w-1/4 px-2">
				<header class="uppercase text-sm text-gray-600 hover:text-blue-800 pb-1">Other Skins in collection</header>
				<div class="bg-gray-200 shadow-md mb-4">
					<related-skin v-for="item in skinsInCollection" :key="item.id" :skin="item" class="hover:bg-white transition-colors delay-200 ease-linear" />
				</div>
				<header class="uppercase text-sm text-gray-600 hover:text-blue-800 pb-1">Other Skins for {{ weapon.name }}</header>
				<div class="bg-gray-200 shadow-md mb-4">
					<related-skin v-for="item in skinsForWeapon" :key="item.id" :skin="item" class="hover:bg-white transition-colors delay-200 ease-linear" />
				</div>
				<div>
					<header class="uppercase text-sm text-gray-600 hover:text-blue-800 pb-1">{{ type.name }}</header>
					<div class="bg-gray-200 shadow-md mb-4">
						<nuxt-link
							v-for="item in type.weapons"
							:key="item.id"
							:to="{name: 'type-weapon', params: { type: type.slug, weapon: item.slug } }"
							class="px-4 py-2 flex hover:bg-white transition-colors delay-200 ease-linear items-center">
							<img :src="item.picture.formats.thumbnail.url" :alt="item.name" class="mr-2 w-20" />
							<p>{{ item.name }}</p>
						</nuxt-link>
					</div>
				</div>
			</aside>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { Context } from '@nuxt/types/app'
import { orderBy } from 'lodash-es'
import { Rarity, SkinCollection, SkinUpgrade, Weapon, WeaponSkin, WeaponType } from '~/types/Weapon'
import Breadcrumb from '~/components/Breadcrumb.vue'
import SkinUpgrades from '~/components/SkinPage/SkinUpgrades.vue'
import SkinViewbox from '~/components/SkinPage/SkinViewbox.vue'
import RelatedSkin from '~/components/SkinPage/RelatedSkin.vue'

interface IData {
	skin?: WeaponSkin
	Rarity: typeof Rarity
	collection?: SkinCollection
	weapon?: Weapon
	type?: WeaponType
}

export default Vue.extend({
	name: 'WeaponSkin',
	components: { SkinViewbox, SkinUpgrades, Breadcrumb, RelatedSkin },
	async asyncData ({ store, params }: Context) {
		const [type, weapon, skin]: [WeaponType, Weapon, WeaponSkin] = await Promise.all([
			store.getters.type(params.type),
			store.getters.weapon(params.weapon),
			store.getters.weapon_skin(params.weapon, params.skin),
		])
		if (!skin) { console.log(skin) }
		const collection: SkinCollection = await store.getters.collection(skin?.skin_collection.id)

		return {
			weapon,
			type,
			skin,
			collection,
			crumbs: [
				{ name: 'index', title: 'home' },
				{ name: 'type', title: type?.name, params: { type: type?.slug } },
				{ name: 'type-weapon', title: weapon?.name, params: { type: type?.slug, weapon: weapon?.slug } },
			],
		}
	},
	data: (): IData => ({ Rarity }),
	computed: {
		...mapState({
			vpPrice: 'vpPrice',
		}),
		skinsInCollection (): WeaponSkin[] { return this.collection?.weapon_skins.filter(item => item.id !== this.skin?.id) || [] },
		skinsForWeapon (): WeaponSkin[] { return this.weapon?.weapon_skins.filter(item => item.id !== this.skin?.id && item.available) || [] },
		rarity_icon () { return require(`~/assets/img/tiers/${this.skin?.rarity}.png`) },
		upgrades (): SkinUpgrade[] { return orderBy(this.skin?.skin_upgrades, 'level', 'asc') },
	},
	methods: {
		roundedPrice (cost: number) { return Math.floor(cost * 100) / 100 },
	},
	head () {
		const title: string = this.skin?.name || ''

		return {
			title,
			meta: [
				{ hid: 'og:title', property: 'og:title', content: title },
				{ hid: 'og:image', property: 'og:image', content: this.skin?.picture.url || '' },
				{ hid: 'twitter:title', property: 'twitter:title', content: title },
				{ hid: 'twitter:image', property: 'twitter:image', content: this.skin?.picture.url || '' },
			],
			link: [
				{ hid: 'canonical', rel: 'canonical', href: `${process.env.BASE_URL}${this.$route.path}` },
			],
		}
	},
})
</script>
