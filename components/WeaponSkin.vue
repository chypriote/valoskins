<template>
	<nuxt-link :to="{ name: 'type-weapon-skin', params: { type: type, weapon: weapon, skin: skin.slug }}" class="skin-tile">
		<div class="skin-rarity hint--top" :aria-label="skin.rarity |ucfirst">
			<img v-if="skin.rarity !== Rarity.STANDARD"
				:src="rarity_icon"
				:alt="skin.rarity |ucfirst"
			/>
		</div>
		<div class="skin-image-wrapper">
			<img :src="skin.picture.url" :alt="skin.name" class="skin-image" />
		</div>
		<div class="skin-infos">
			<h4 class="skin-name">{{ skin.name }}</h4>
			<p v-if="skin.price" class="skin-price">
				{{ skin.price }}
				<img src="~/assets/img/valorantpoints.png" alt="Valorant Points" />
			</p>
		</div>
	</nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { WeaponSkin, Rarity } from '~/types/Weapon'

export default Vue.extend({
	props: {
		skin: {
			type: Object as () => WeaponSkin,
			required: true,
		},
	},
	data: () => ({ Rarity }),
	computed: {
		rarity_icon (): string { return require(`~/assets/img/tiers/${this.skin.rarity}.png`) },
		weapon (): string { return this.$route.params.weapon },
		type (): string { return this.$route.params.type },
	},
})
</script>

<style scoped>
.skin-tile {
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 1.5rem;
	text-align: center;
	border-radius: 6px;
	background-color: #34164b;
}
.skin-rarity {
	position: absolute;
	top: .5rem;
	left: .5rem;
	img {height: 1.75rem;}
}
.skin-image-wrapper {
	height: 6rem;
	img {max-height: 100%;}
}
.skin-infos {
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;
	.skin-name {font-weight: bold;font-size: 1.2rem;}
}
.skin-price {
	display: flex;
	align-items: center;
	img {height: 1rem;margin-left: .25rem;}
}
</style>
