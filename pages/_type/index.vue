<template>
	<div>
		Weapon Type
		<div class="flex">
			<nuxt-link :to="{name: 'type-weapon', params: {type: weaponType.slug, weapon: weapon.slug}}" v-for="weapon in weaponType.weapons" :key="weapon.id">
				<img :src="weapon.picture.url" :alt="weapon.name" class="w-32" />
				{{ weapon.name }}
			</nuxt-link>
		</div>
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
}
</script>
