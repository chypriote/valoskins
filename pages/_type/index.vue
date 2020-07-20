<template>
	<div>
		Weapon Type
		{{ weaponType }}
	</div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

export default {
	async asyncData ({ $strapi, params }: Context) {
		const weaponType = await $strapi.find('weapon-types', { slug: params.type })

		return { weaponType: weaponType.pop() }
	},
	data: () => ({}),
	computed: {},
}
</script>
