<template>
	<nuxt-link class="weapon-link" :to="{name: 'type-weapon', params: { type: type, weapon: weapon.slug } }">
		<div class="weapon-tile">
			<img v-if="weapon.picture"
				class="weapon-image"
				:alt="weapon.name"
				:title="weapon.name"
				:src="weapon.picture.url"
				data-loaded="true"
			/>
			<div class="weapon-infos">
				<p class="weapon-name">{{ weapon.name }}</p>
				<div class="weapon-cost">
					<svg width="11" height="10" viewBox="0 0 11 10" fill="none" class="weapon-cost-icon">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0296 5.01478C10.0296 4.11094 9.76653 3.26854 9.31285 2.55994L10.8451 0.939745L9.85144 0L8.407 1.52733C7.61378 0.858763 6.58927 0.455889 5.47066 0.455889C4.3054 0.455889 3.24224 0.893077 2.43627 1.61238L1.02738 0.00900881L0 0.911777L1.55402 2.68031C1.14615 3.36315 0.911777 4.16159 0.911777 5.01478C0.911777 6.00708 1.22881 6.92534 1.76712 7.67378L0.455886 9.06026L1.44956 10L2.72331 8.65316C3.48729 9.23095 4.43896 9.57366 5.47066 9.57366C6.55864 9.57366 7.55761 9.19254 8.34134 8.55653L9.44326 9.81056L10.4706 8.90779L9.26768 7.53877C9.74902 6.8161 10.0296 5.9482 10.0296 5.01478ZM5.47066 8.07366C7.16004 8.07366 8.52955 6.70415 8.52955 5.01478C8.52955 3.3254 7.16004 1.95589 5.47066 1.95589C3.78129 1.95589 2.41178 3.3254 2.41178 5.01478C2.41178 6.70415 3.78129 8.07366 5.47066 8.07366Z" fill="currentColor" />
					</svg>
					<span class="weapon-cost-value">{{ weapon.price }}</span>
				</div>
			</div>
		</div>
	</nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { WeaponType } from '~/types/Weapon'

export default Vue.extend({
	name: 'WeaponContainer',
	props: {
		type: {
			required: true,
			type: String,
		},
		weapon: {
			required: true,
			type: Object as () => WeaponType,
		},
	},
})
</script>

<style scoped>
.weapon-link {
	flex: 1 1 auto;
	margin-bottom: 10px;
	text-decoration: none;
	color: inherit;
	&:hover {
		.weapon-image {filter: contrast(1);}
		.weapon-tile {border: 1px solid rgb(204, 173, 112);box-shadow: rgba(204, 173, 112, .4) 0 0 8px;}
	}
}
.weapon-tile {
	background: rgb(44, 39, 79);
	border: 1px solid rgb(56, 47, 102);
	box-sizing: border-box;
	box-shadow: rgba(21, 11, 37, .5) 0 2px 10px;
	border-radius: 6px;
	padding: 1rem 2rem;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	transition: border .3s ease-out 0s;
	min-height: 110px;
}
.weapon-image {
	display: block;
	width: auto;
	height: auto;
	max-width: 100%;
	max-height: 4rem;
	margin: 0 auto;
	background: transparent;
	opacity: 1;
	filter: contrast(0);
	transition: all .4s ease-in-out;
}
.weapon-infos {
	position: absolute;
	bottom: .5rem;
	left: 1rem;
}
.weapon-name {
	font-weight: 500;
	line-height: 1.2;
	color: rgb(255, 255, 255);
	text-transform: uppercase;
}
.weapon-cost {
	display: flex;
	align-items: center;
	color: rgb(200, 174, 120);
}
.weapon-cost-icon {
	vertical-align: middle;
	margin-right: 5px;
}
.weapon-cost-value {
	vertical-align: middle;
	line-height: 1;
}
</style>
