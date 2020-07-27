<template>
	<div>
		<template v-for="(crumb, index) in crumbs">
			<nuxt-link
				:key="`link-${index}`"
				:to="{ name: crumb.name, params: crumb.params }"
				class="hover:text-blue-800 transition-colors duration-300 ease-in-out"
			>{{ crumb.title }}</nuxt-link>
			<span
				v-if="index !== crumbs.length - 1"
				:key="`divider-${index}`"
				class="mx-1"
			>/</span>
		</template>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	props: {
		crumbs: {
			type: Array,
			required: true,
		},
	},
})
</script>
