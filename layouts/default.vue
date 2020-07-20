<template>
	<div id="app" class="custom-background bg-gray-100 text-gray-800 h-screen">
		<navbar />
		<nuxt />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/Navbar.vue'

export default Vue.extend({
	components: { Navbar },
})
</script>
