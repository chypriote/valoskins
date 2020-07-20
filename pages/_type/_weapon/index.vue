<template>
	<div class="">
		<header class="bg-blue-200">
			<div class="container mx-auto flex flex-col justify-center pt-10 pb-8">
				<breadcrumb :crumbs="crumbs" />
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
					<h1>Available skins</h1>
					<weapon-skin v-for="skin in weapon.weapon_skins" :key="skin.id" :skin="skin" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types/app'
import { Weapon, WeaponType } from '~/types/Weapon'
import Breadcrumb from '~/components/Breadcrumb.vue'
import WeaponSkin from '~/components/WeaponSkin.vue'

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

		return {
			weapon,
			type,
			crumbs: [
				{ name: 'index', title: 'home' },
				{ name: 'type', title: type?.name, params: { type: type?.slug } },
			],
		}
	},
})
</script>
