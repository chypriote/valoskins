<template>
	<div class="flex -mx-2">
		<section class="w-3/4 px-2">
			<div class="overflow-hidden bg-white shadow-md mb-4">
				<img
					class="w-full"
					src="https://www.mandatory.gg/wp-content/uploads/database/weapons/stinger/artworks/valorant-database-weapons-stinger-artwork.png	"
					:alt="skin.name"
				/>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2">{{ `${skin.weapon.name} ${skin.name}` }}</div>
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
						<img :src="rarity" :alt="skin.rarity" :title="skin.rarity" />
						{{ skin.price }}
						<img src="~/assets/img/valorantpoints.png" alt="Valorant Points" class="w-8" />
					</div>
				</div>
			</div>
		</section>
		<aside class="w-1/5 px-2">
			<div class="bg-white shadow-md">
				<div class="px-6 py-4">
					<header>Price</header>
					<div>1300 VP</div>
				</div>
			</div>
			<nuxt-link :to="{ name: 'weapon', params: { weapon: weapon } }">Back</nuxt-link>
		</aside>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types/app'
import { Weapon } from '~/types/Weapon'

export default Vue.extend({
	name: 'WeaponSkin',
	async asyncData ({ $content, params }: Context) {
		const skin: Weapon = await $content(`weapons/${params.weapon}/${params.skin}`).fetch()

		return { skin, weapon: params.weapon }
	},
	computed: {
		rarity () {
			// @ts-ignore
			return require(`~/assets/img/tiers/${this.skin.rarity}.jpg`)
		},
	},
})
</script>
