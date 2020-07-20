<template>
	<div id="app" class="custom-background bg-gray-100 text-gray-800 h-screen">
		<div class="container mx-auto mb-8">
			<navbar />
		</div>
		<div class="container mx-auto">
			<div class="px-4 md:block">
				<nuxt />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/Navbar.vue'

export default Vue.extend({
	components: { Navbar },
})
</script>
