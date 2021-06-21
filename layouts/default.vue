<template>
	<div id="app">
		<navbar />
		<nuxt class="main" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/Navbar.vue'

export default Vue.extend({
	components: { Navbar },
})
</script>

<style scoped>
.main {padding-top: 3.5rem;}
</style>
