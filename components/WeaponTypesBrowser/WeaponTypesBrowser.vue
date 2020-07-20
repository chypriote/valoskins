<template>
	<div class="mb-4">
		<h2 class="uppercase text-xl">Browse by type of weapon</h2>
		<div class="flex">
			<weapon-type v-for="type in types" :key="type.slug" :weapon-type="type" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import WeaponType from '~/components/WeaponTypesBrowser/WeaponType.vue'

export default Vue.extend({
	components: { WeaponType },
	data: () => ({ types: [] }),
	async mounted () {
		this.types = await this.$strapi.find('weapon-types')
	},
})
</script>
