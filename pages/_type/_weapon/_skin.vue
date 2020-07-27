<template>
	<div class="container mx-auto">
		<div class="flex -mx-2">
			<section class="w-3/4 px-2">
				<div class="overflow-hidden bg-white shadow-md mb-4">
					<breadcrumb :crumbs="crumbs" />
					<img
						class="w-full"
						:src="skin.picture.url"
						:alt="skin.name"
					/>
					{{ skin.price }}<img src="~/assets/img/valorantpoints.png" alt="Valorant Points" class="w-4 ml-1" />
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2">{{ skin.name }}</div>
						<p class="text-gray-700 text-base">
							{{ skin }}
						</p>
					</div>
				</div>
				<div class="flex -mx-2">
					<div class="w-1/2 px-2">
						<div class="bg-white shadow-md px-6 py-4">
							Pack/unlock
						</div>
					</div>
					<div class="w-1/2 px-2">
						<div class="bg-white shadow-md px-6 py-4">
							<img v-if="skin.rarity !== Rarity.STANDARD" :src="rarity_icon" :alt="skin.rarity" :title="skin.rarity" />
							{{ skin.price }}
							<img src="~/assets/img/valorantpoints.png" alt="Valorant Points" class="w-8" />
						</div>
					</div>
				</div>
			</section>
			<aside class="w-1/4 px-2">
				<div>
					<header class="uppercase text-sm text-gray-600 hover:text-blue-800 pb-1">Other Skins in collection</header>
					<div class="bg-gray-200 shadow-md mb-4">
						<related-skin v-for="item in skinsInCollection" :key="item.id" :skin="item" class="hover:bg-white transition-colors delay-200" />
					</div>
				</div>
				<div>
					<header class="uppercase text-sm text-gray-600 hover:text-blue-800 pb-1">Other Skins for {{ weapon.name }}</header>
					<div class="bg-gray-200 shadow-md mb-4">
						<related-skin v-for="item in skinsForWeapon" :key="item.id" :skin="item" class="hover:bg-white transition-colors delay-200" />
					</div>
				</div>
				<div>
					<header class="uppercase text-sm text-gray-600 hover:text-blue-800 pb-1">{{ type.name }}</header>
					<div class="bg-gray-200 shadow-md mb-4">
						<nuxt-link
							v-for="item in type.weapons"
							:key="item.id"
							:to="{name: 'type-weapon', params: { type: type.slug, weapon: item.slug } }"
							class="px-4 py-2 flex hover:bg-white transition-colors delay-200 items-center">
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
import { Context } from '@nuxt/types/app'
import { Rarity, SkinCollection, Weapon, WeaponSkin, WeaponType } from '~/types/Weapon'
import Breadcrumb from '~/components/Breadcrumb.vue'
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
	components: { RelatedSkin, Breadcrumb },
	async asyncData ({ store, params }: Context) {
		const [type, weapon, skin]: [WeaponType, Weapon, WeaponSkin] = await Promise.all([
			store.getters.type(params.type),
			store.getters.weapon(params.weapon),
			store.getters.weapon_skin(params.weapon, params.skin),
		])
		const collection: SkinCollection = await store.getters.collection(skin.skin_collection.id)

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
		skinsInCollection (): WeaponSkin[] { return this.collection?.weapon_skins.filter(item => item.id !== this.skin?.id) || [] },
		skinsForWeapon (): WeaponSkin[] { return this.weapon?.weapon_skins.filter(item => item.id !== this.skin?.id && item.available) || [] },
		rarity_icon () { return require(`~/assets/img/tiers/${this.skin?.rarity}.png`) },
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
