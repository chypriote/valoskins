<template>
	<div>
		Weapon Type
		<div class="flex">
			<nuxt-link v-for="weapon in weaponType.weapons" :key="weapon.id" :to="{name: 'type-weapon', params: {type: weaponType.slug, weapon: weapon.slug}}">
				<img :src="weapon.picture.url" :alt="weapon.name" class="w-32" />
				{{ weapon.name }}
			</nuxt-link>
		</div>
		{{ weaponType }}
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import { WeaponType } from '~/types/Weapon'

interface IData {
	weaponType: WeaponType|null
}

export default Vue.extend({
	async asyncData ({ $api, params }: Context) {
		const weaponType: WeaponType = await $api.getWeaponTypeBySlug(params.type)

		return { weaponType }
	},
	data: (): IData => ({ weaponType: null }),
	head () {
		const title: string = this.weaponType?.name || ''
		return {
			title,
			meta: [
				{ hid: 'og:title', property: 'og:title', content: title },
				{ hid: 'og:image', property: 'og:image', content: this.weaponType?.picture.url || '' },
				{ hid: 'twitter:title', property: 'twitter:title', content: title },
				{ hid: 'twitter:image', property: 'twitter:image', content: this.weaponType?.picture.url || '' },
			],
			link: [
				{ hid: 'canonical', rel: 'canonical', href: `${process.env.BASE_URL}${this.$route.path}` },
			],
		}
	},
})
</script>
