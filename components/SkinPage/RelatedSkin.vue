<template>
	<nuxt-link :to="{name: 'type-weapon-skin', params: { type: type.slug, weapon: weapon.slug, skin: skin.slug }}" class="px-4 py-2 flex items-center">
		<img :src="skin.picture.formats.thumbnail.url" :alt="skin.name" class="mr-2  w-16" />
		<p class="flex-1">{{ skin.name }}</p>
		<img v-if="skin.rarity !== Rarity.STANDARD" :src="rarity_icon" :alt="skin.rarity" :title="skin.rarity" class="w-6" />
	</nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Rarity, Weapon, WeaponSkin, WeaponType } from '~/types/Weapon'

interface IData {
	skin?: WeaponSkin
	Rarity: typeof Rarity
	weapon?: Weapon
}

export default Vue.extend({
	props: {
		skin: {
			type: Object as () => WeaponSkin,
			required: true,
		},
	},
	data: (): IData => ({ Rarity }),
	computed: {
		...mapGetters({
			getWeapon: 'weapon',
			getType: 'type',
		}),
		weapon (): Weapon { return this.getWeapon(this.skin.weapon) },
		type (): WeaponType { return this.getType(this.weapon?.type.id) },
		rarity_icon () { return require(`~/assets/img/tiers/${this.skin?.rarity}.png`) },
	},
})
</script>
