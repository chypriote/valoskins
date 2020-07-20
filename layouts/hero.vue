<template>
	<div id="app" class="bg-gray-100 text-gray-800 border-b-2">
		<navbar />
		<hero-section />
		<div class="container mx-auto">
			<nuxt />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/Navbar.vue'
import HeroSection from '~/components/HeroSection.vue'

export default Vue.extend({
	components: { HeroSection, Navbar },
})
</script>
