<template>
	<nuxt-link :to="{ name: 'type-slug', params: { slug: weaponType.slug } }" class="weapon-type">
		<div class="image-wrapper">
			<img :src="weaponType.picture.url" class="image" :alt="weaponType.name" />
		</div>
		<div class="name-wrapper">
			<span class="name">{{ weaponType.name }}</span>
		</div>
	</nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { WeaponType } from '~/types/Weapon'

export default Vue.extend({
	props: {
		weaponType: {
			type: Object as () => WeaponType,
			required: true,
		},
	},
})
</script>

<style scoped>
.weapon-type {
	flex: 1;
	position: relative;
	display: flex;
	flex-direction: column;
	background: #151515;
	border: 1px solid rgba(135, 153, 166, .3);
	overflow: hidden;
	&:hover {
		.image {filter: contrast(1);}
		.name {opacity: 1;}
	}
}
.image-wrapper {
	width: 100%;
	height: 12rem;
}
.image {
	position: absolute;
	top: -5%;
	left: 0;
	width: 100%;
	height: auto;
	filter: contrast(0);
	transition: all 300ms ease-in-out;
}
.name-wrapper {
	width: 100%;
	height: 3rem;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	background-color: #222;
	z-index: 1;
}
.name {
	width: 100%;
	color: white;
	text-align: center;
	text-transform: uppercase;
	opacity: .5;
	transition: opacity 300ms ease-out;
}
</style>
