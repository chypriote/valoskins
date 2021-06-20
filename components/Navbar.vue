<template>
	<div id="navbar" class="navbar">
		<header class="container">
			<div class="logo">
				<nuxt-link to="/">Logo</nuxt-link>
			</div>

			<nav class="menu">
				<nuxt-link to="/skins">Skins</nuxt-link>
				<nuxt-link to="/collections">Collections</nuxt-link>
			</nav>
		</header>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'Navbar',
	data: () => ({
		isOpen: false,
	}),
})
</script>

<style scoped>
.navbar {
	margin: 0 auto;
	display: flex;
	flex: 0 0 auto;
	width: 100%;
	justify-content: center;
	align-items: center;
	background: #0b1219;
	position: fixed;
	top: 0;
	z-index: 1000;
	height: 3.5rem;
}
header {
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	user-select: none;
}
.logo {
	flex-flow: row wrap;
	align-items: flex-start;
	justify-content: flex-start;
	a {
		display: flex;
		text-transform: uppercase;
		color: #fff;
		border-radius: 0 0 0 3px;
		padding: 0;
		font-weight: bold;
		font-stretch: condensed;
		transition: all .2s ease 0s;
	}
}
.menu {
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-end;
	display: flex;
	a {
		padding: 0 1.5rem;
		font-weight: bold;
		color: #fff;
		font-stretch: condensed;
		display: block;
	}
}
</style>
