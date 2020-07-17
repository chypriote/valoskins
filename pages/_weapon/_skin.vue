<template>
	<div>
		<h1>{{ skin.name }}</h1>
		{{ skin }}

		<nuxt-link :to="{ name: 'weapon', params: { weapon: weapon } }">Back</nuxt-link>
	</div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types/app'
import { Weapon } from '~/types/Weapon'

export default {
	name: 'WeaponSkin',
	async asyncData({ $content, params }: Context) {
		const skin: Weapon = await $content(`weapons/${params.weapon}/${params.skin}`).fetch()
		console.log(skin)

		return { skin, weapon: params.weapon }
	},
}
</script>
