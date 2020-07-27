<template>
	<div class="px-4 md:block">
		<weapon-types-browser :weapon-types="types" />
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
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import WeaponTypesBrowser from '~/components/WeaponTypesBrowser/WeaponTypesBrowser.vue'
import FeaturedSkins from '~/components/FeaturedSkins/FeaturedSkins.vue'

export default Vue.extend({
	components: { FeaturedSkins, WeaponTypesBrowser },
	layout: 'hero',
	computed: {
		...mapState({
			collections: 'collections',
			types: 'weaponTypes',
		}),
	},
})
</script>
