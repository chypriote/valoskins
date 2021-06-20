<template>
	<div class="container">
		<section id="featured-skins">
			<h2 class="title">Featured skins</h2>
			<featured-skins style="width: 75%;" />
		</section>
		<section id="select-weapon">
			<h2 class="title">Select a weapon</h2>
			<weapon-picker />
		</section>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { WeaponType } from '~/types/Weapon'
import FeaturedSkins from '~/components/FeaturedSkins/FeaturedSkins.vue'
import WeaponPicker from '~/components/WeaponPicker.vue'

export default Vue.extend({
	components: { WeaponPicker, FeaturedSkins },
	layout: 'default',
	computed: {
		...mapState({
			collections: 'collections',
			types: 'weaponTypes',
		}),
		sidearms (): WeaponType { return this.types.find((type: WeaponType) => type.slug === 'sidearm') || []	 },
		smgs (): WeaponType { return this.types.find((type: WeaponType) => type.slug === 'smg') || []	 },
		shotguns (): WeaponType { return this.types.find((type: WeaponType) => type.slug === 'shotgun') || []	 },
		rifles (): WeaponType { return this.types.find((type: WeaponType) => type.slug === 'rifle') || []	 },
		snipers (): WeaponType { return this.types.find((type: WeaponType) => type.slug === 'sniper') || []	 },
		heavies (): WeaponType { return this.types.find((type: WeaponType) => type.slug === 'heavy') || []	 },
		melees (): WeaponType { return this.types.find((type: WeaponType) => type.slug === 'melee') || []	 },
	},
})
</script>

<style>
.title {
	color: #fff;
	font-family: jaf-bernina-sans-condensed, sans-serif;
	font-size: 2rem;
	font-weight: bold;
}
#featured-skins {
	padding-bottom: 1.5rem;
	padding-top: 1.5rem;
	flex: 1 0 auto;
	display: block;
	flex-direction: column;
	justify-content: initial;
	align-items: initial;
}
</style>
