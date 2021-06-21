<template>
	<div class="skin-viewbox">
		<img :src="skin.picture.url" :alt="skin.name" />
		<!-- Rarity -->
		<div class="skin-rarity">
			<img v-if="skin.rarity !== Rarity.STANDARD" :src="rarity_icon" :alt="skin.rarity" :title="skin.rarity" class="mr-1 h-4 w-auto" />
			<p>{{ skin.rarity |ucfirst }}</p>
		</div>
		<!-- Upgradable -->
		<div v-if="skin.skin_upgrades.length" class="skin-upgradable">
			<p>{{ 'Upgradable' }}</p>
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
		rarity_icon () { return require(`~/assets/img/tiers/${this.skin?.rarity}.png`) },
	},
})
</script>

<style scoped>
.skin-viewbox {
	background: #0d161f;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	border: 1px solid #d4d1cb;
}
.skin-rarity {
	position: absolute;
	top: 1rem;
	right: 1rem;
}
.skin-upgradable {
	position: absolute;
	top: 1rem;
	left: 1rem;
}
</style>
