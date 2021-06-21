<template>
	<div id="navbar" role="navigation" class="navbar">
		<div class="container">
			<div class="logo">
				<nuxt-link to="/">Logo</nuxt-link>
			</div>

			<nav class="menu">
				<nuxt-link to="/skins">Skins</nuxt-link>
				<nuxt-link to="/collections">Collections</nuxt-link>
			</nav>
		</div>
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
	top: 0;
	user-select: none;
	width: 100%;
	min-width: 100%;
	z-index: 100;
	background: var(--main-nav-background-color);
	box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 16%);
	height: 3.5rem;
	pointer-events: auto;
	transform: translateZ(0);
	left: 0;
	position: fixed;
	right: 0;
	min-height: 3.25rem;
	align-items: stretch;
	display: flex;
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
