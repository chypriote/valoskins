<template>
	<div class="flex -mx-2">
		<section class="w-3/4 px-2">
			<div class="overflow-hidden bg-white shadow-md mb-4">
				<breadcrumb :crumbs="crumbs" />
				<img
					class="w-full"
					:src="skin.picture.url"
					:alt="skin.name"
				/>
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
		<aside class="w-1/5 px-2">
			<div class="bg-white shadow-md mb-4">
				<div class="px-6 py-4">
					<header>Price</header>
					<div>{{ skin.price }} <img src="~/assets/img/valorantpoints.png" alt="Valorant Points" class="w-4 ml-1" /></div>
				</div>
			</div>
			<div class="bg-white shadow-md px-6 py-4">
				<nuxt-link :to="{ name: 'type-weapon', params: { type: type.slug, weapon: weapon.slug } }">
					<img :src="weapon.picture.url" class="image" :alt="weapon.name" />
					Back
				</nuxt-link>
			</div>
		</aside>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types/app'
import { Rarity, Weapon, WeaponSkin, WeaponType } from '~/types/Weapon'
import Breadcrumb from '~/components/Breadcrumb.vue'

export default Vue.extend({
	name: 'WeaponSkin',
	components: { Breadcrumb },
	async asyncData ({ $strapi, params }: Context) {
		const [types, weapons]: [WeaponType[], Weapon[]] = await Promise.all([
			$strapi.find('weapon-types', { slug: params.type }),
			$strapi.find('weapons', { slug: params.weapon }),
		])

		const type = types.shift()
		const weapon = weapons.shift()

		const skins: WeaponSkin[] = await $strapi.find('weapon-skins', { slug: params.skin, weapon: weapon?.id })
		const skin = skins.shift()
		return {
			weapon,
			type,
			skin,
			crumbs: [
				{ name: 'index', title: 'home' },
				{ name: 'type', title: type?.name, params: { type: type?.slug } },
				{ name: 'type-weapon', title: weapon?.name, params: { type: type?.slug, weapon: weapon?.slug } },
			],
		}
	},
	data: () => ({ Rarity }),
	computed: {
		// @ts-ignore
		rarity_icon () { return require(`~/assets/img/tiers/${this.skin.rarity}.png`) },
	},
})
</script>
