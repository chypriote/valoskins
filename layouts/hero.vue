<template>
	<div id="app" class="custom-background bg-gray-100 text-gray-800 border-b-2">
		<div class="container mx-auto">
			<navbar />
			<hero-section />
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
