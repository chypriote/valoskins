<template>
	<div class="border border-gray-600 py-4 px-2 flex items-center">
		<div class="flex items-center px-4">
			<img :src="skin.picture.url" :alt="skin.name" class="w-32" />
		</div>
		<nuxt-link :to="{ name: 'type-weapon-skin', params: { type: type, weapon: weapon, skin: skin.slug }}" class="flex-1">
			{{ skin.name }}
		</nuxt-link>
		<div class="flex items-center px-4">
			<img v-if="skin.rarity !== Rarity.STANDARD"
				:src="rarity_icon"
				:alt="skin.rarity"
				:title="skin.rarity"
				class="w-8"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { WeaponSkin, Rarity } from '~/types/Weapon'

export default Vue.extend({
	props: {
		skin: {
			type: Object as () => WeaponSkin,
			required: true,
		},
	},
	data: () => ({ Rarity }),
	computed: {
		rarity_icon () { return require(`~/assets/img/tiers/${this.skin.rarity}.png`) },
		// @ts-ignore
		weapon () { return this.$route.params.weapon },
		// @ts-ignore
		type () { return this.$route.params.type },
	},
})
</script>
