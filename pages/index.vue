<template>
	<div class="container mx-auto mt-8">
	<div class="page-layout-with-ads-on-right-sidecomponent__ContentContainer-el8n26-3 dATmBz">
		<div class="weapons-wrapper">
			<div class="weapon-grid">
				<div class="weapon-grid-cell">
					<weapon-header :title="'sidearm'" />
					<div class="weapon-container">
						<weapon-link v-for="sidearm in sidearms.weapons" :key="sidearm.id" :weapon="sidearm" type="sidearm" />
					</div>
				</div>
			</div>
			<div class="weapon-grid">
				<div class="weapon-grid-cell">
					<weapon-header :title="'smg'" />
					<div class="weapon-container">
						<weapon-link v-for="smg in smgs.weapons" :key="smg.id" :weapon="smg" type="smg" />
					</div>
				</div>
				<div class="weapon-grid-cell">
					<weapon-header :title="'shotgun'" />
					<div class="weapon-container">
						<weapon-link v-for="shotgun in shotguns.weapons" :key="shotgun.id" :weapon="shotgun" type="shotgun" />
					</div>
				</div>
			</div>
			<div class="weapon-grid">
				<div class="weapon-grid-cell">
					<weapon-header :title="'rifle'" />
					<div class="weapon-container">
						<weapon-link v-for="rifle in rifles.weapons" :key="rifle.id" :weapon="rifle" type="rifle" />
					</div>
				</div>
			</div>
			<div class="weapon-grid">
				<div class="weapon-grid-cell">
					<weapon-header :title="'sniper'" />
					<div class="weapon-container">
						<weapon-link v-for="sniper in snipers.weapons" :key="sniper.id" :weapon="sniper" type="sniper" />
					</div>
				</div>
				<div class="weapon-grid-cell">
					<weapon-header :title="'heavy'" />
					<div class="weapon-container">
						<weapon-link v-for="heavy in heavies.weapons" :key="heavy.id" :weapon="heavy" type="heavy" />
					</div>
				</div>
			</div>
		</div>
		<div class="weapon-footer">
			<div class="weapon-grid-cell">
				<weapon-header :title="'melee'" />
				<div class="weapon-container">
					<weapon-link v-for="melee in melees.weapons" :key="melee.id" :weapon="melee" type="melee" />
				</div>
			</div>
		</div>
	</div>
	<div class="px-4 md:block">
		<div class="flex -mx-4">
			<section class="w-3/4 px-4">
				<h2 class="uppercase text-xl">Featured skins</h2>
				<featured-skins />
			</section>
			<aside class="w-1/4 px-4">
				<div class="w-full">Test</div>
				<div class="w-full">Test</div>
			</aside>
		</div>
		<weapon-types-browser :weapon-types="types" />
	</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import WeaponTypesBrowser from '~/components/WeaponTypesBrowser/WeaponTypesBrowser.vue'
import FeaturedSkins from '~/components/FeaturedSkins/FeaturedSkins.vue'
import WeaponHeader from '~/components/Index/WeaponHeader.vue'
import WeaponLink from '~/components/Index/WeaponLink.vue'
import { WeaponType } from '~/types/Weapon'

export default Vue.extend({
	components: { WeaponHeader, WeaponLink, FeaturedSkins, WeaponTypesBrowser },
	layout: 'default',
	computed: {
		...mapState({
			collections: 'collections',
			types: 'weaponTypes',
		}),
		sidearms (): WeaponType { return this.types.find((type: WeaponType) => type.slug === 'sidearms') || []	 },
		smgs (): WeaponType { return this.types.find((type: WeaponType) => type.slug === 'smgs') || []	 },
		shotguns (): WeaponType { return this.types.find((type: WeaponType) => type.slug === 'shotguns') || []	 },
		rifles (): WeaponType { return this.types.find((type: WeaponType) => type.slug === 'rifles') || []	 },
		snipers (): WeaponType { return this.types.find((type: WeaponType) => type.slug === 'snipers') || []	 },
		heavies (): WeaponType { return this.types.find((type: WeaponType) => type.slug === 'heavies') || []	 },
		melees (): WeaponType { return this.types.find((type: WeaponType) => type.slug === 'melees') || []	 },
	},
})
</script>

<style scoped>
.weapons-wrapper {
	display: flex;
	margin: 0 -10px;
	flex-wrap: wrap;
}
.weapon-grid {
	display: flex;
	flex-direction: column;
	flex: 1 1 0;
	@media (max-width: 991.98px) {flex: 1 1 50%;}
}
.weapon-grid-cell {
	display: flex;
	flex-direction: column;
	margin: 0 10px;
	flex: 1 1 auto;
}
.weapon-container {
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
}
.weapon-footer {
	width: 100%;
	display: flex;
	justify-content: center;
	& > .weapon-grid-cell {
		flex-basis: 25%;
		flex-grow: 0;
		@media (max-width: 991.98px) {flex-basis: 50%;}
	}
}
</style>
