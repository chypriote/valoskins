<template>
	<div class="">
		<h1>Test</h1>
		<div v-for="weapon in availableSkings" :key="weapon.slug" class="weapon">
			<nuxt-link :to="{ name: 'weapon-skin', params: { weapon: current, skin: weapon.slug } }">
				{{ weapon.name }}
			</nuxt-link>
		</div>
		{{ JSON.stringify(skins) }}
		<nuxt-child />
	</div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types/app'
import { Weapon } from '~/types/Weapon'

export default {
	name: 'WeaponIndex',
	async asyncData({ $content, params }: Context) {
		const skins: Weapon[] = await $content('weapons', params.weapon, { deep: true }).fetch()
		console.log(skins)

		return {
			current: params.weapon,
			skins,
			availableSkings: skins.filter((item: Weapon) => item.slug !== 'index'),
		}
	},
}
</script>
