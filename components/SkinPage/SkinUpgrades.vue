<template>
	<div class="flex flex-col bg-gray-200 py-2 px-2">
		<header class="uppercase text-sm text-gray-600 pb-1">Available Upgrades</header>
		<div v-for="upgrade in upgrades" :key="upgrade.id" class="flex items-center justify-between" :class="upgrades.length !== 1 ? 'flex-1' : ''">
			<p>{{ upgrade.displayText }}</p>
			<p class="flex text-sm items-center leading-none">{{ upgrade.cost }} <img src="~/assets/img/radianitepoints.png" alt="Radianite Points" class="h-4 ml-1" /></p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SkinUpgrade } from '~/types/Weapon'

export default Vue.extend({
	props: {
		upgrades: {
			type: Array as () => SkinUpgrade[],
			required: true,
		},
	},
})
</script>
