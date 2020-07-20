<template>
	<div class="mb-4">
		<h2 class="uppercase text-xl">Browse by type of weapon</h2>
		<div class="flex">
			<weapon-type v-for="type in weaponTypes" :key="type.id" :weapon-type="type" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import WeaponType from '~/components/WeaponTypesBrowser/WeaponType.vue'

export default Vue.extend({
	components: { WeaponType },
	props: {
		weaponTypes: {
			type: Array,
			required: true,
		},
	},
})
</script>
