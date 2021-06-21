<template>
	<div class="container">
		<div class="row">
			<div class="col-8">
				<skin-viewbox :skin="skin" />
				<skin-upgrades v-if="upgrades.length" :upgrades="upgrades" />

				<div class="flex flex-col justify-center">
					<div v-if="chromas.length" class="flex justify-center">
						<div v-for="chroma in chromas" :key="chroma.id">
							<img class="h-16 w-auto" style="max-width: 5rem;" :src="chroma.media.url" :alt="chroma.displayText" :title="chroma.displayText" />
						</div>
					</div>
				</div>
			</div>
			<div class="col-4">
				<div class="card">
					<h2 class="title">{{ skin.name }}</h2>
					<div class="flex items-center">
						<p class="text-xl leading-none">{{ skin.price }}</p>
						<img src="~/assets/img/valorantpoints.png" alt="Valorant Points" class="w-5 h-5 ml-1" />
					</div>
					<div class="flex items-center">
						<p class="text-xl leading-none">~{{ roundedPrice(skin.price * vpPrice) }} €</p>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<section class="col col-12">
				<div class="row">
					<div class="col">
						<h4>Other Skins in collection</h4>
						<div class="row">
							<related-skin v-for="item in skinsInCollection" :key="item.id" :skin="item" class=" col col-3" />
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<h4>Other Skins for {{ weapon.name }}</h4>
						<div class="row">
							<related-skin v-for="item in skinsForWeapon" :key="item.id" :skin="item" class="col col-3" />
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { Context } from '@nuxt/types/app'
import { orderBy } from 'lodash-es'
import { Rarity, SkinCollection, SkinUpgrade, Upgrade, Weapon, WeaponSkin } from '~/types/Weapon'
import SkinUpgrades from '~/components/SkinPage/SkinUpgrades.vue'
import SkinViewbox from '~/components/SkinPage/SkinViewbox.vue'
import RelatedSkin from '~/components/SkinPage/RelatedSkin.vue'

interface IData {
	Rarity: typeof Rarity
	skin?: WeaponSkin
	collection?: SkinCollection
	weapon?: Weapon
}

export default Vue.extend({
	name: 'WeaponSkin',
	components: { SkinViewbox, SkinUpgrades, RelatedSkin },
	async asyncData ({ $api, params, $strapi }: Context) {
		const weapon: Weapon = await $api.getWeaponBySlug(params.weapon)
		const skin = await $api.getSkinBySlugAndWeapon(params.skin, weapon.id)
		const collection: SkinCollection = await $strapi.findOne('skin-collections', skin.skin_collection.id)

		return {
			weapon,
			skin,
			collection,
		}
	},
	data: (): IData => ({ Rarity }),
	computed: {
		...mapState({
			vpPrice: 'vpPrice',
		}),
		chromas () { return orderBy(this.skin?.skin_upgrades.filter(upgrade => upgrade.type === Upgrade.CHROMA), 'level', 'asc') },
		skinsInCollection (): WeaponSkin[] { return this.collection?.weapon_skins.filter(item => item.id !== this.skin?.id) || [] },
		skinsForWeapon (): WeaponSkin[] { return this.weapon?.weapon_skins.filter(item => item.id !== this.skin?.id && item.available) || [] },
		rarity_icon () { return require(`~/assets/img/tiers/${this.skin?.rarity}.png`) },
		upgrades (): SkinUpgrade[] { return orderBy(this.skin?.skin_upgrades, 'level', 'asc') },
	},
	methods: {
		roundedPrice (cost: number): number { return Math.floor(cost * 100) / 100 },
	},
	// eslint-disable-next-line vue/order-in-components
	head () {
		const title: string = this.skin?.name || ''

		return {
			title,
			meta: [
				{ hid: 'og:title', property: 'og:title', content: title },
				{ hid: 'og:image', property: 'og:image', content: this.skin?.picture.url || '' },
				{ hid: 'twitter:title', property: 'twitter:title', content: title },
				{ hid: 'twitter:image', property: 'twitter:image', content: this.skin?.picture.url || '' },
			],
			link: [
				{ hid: 'canonical', rel: 'canonical', href: `${process.env.BASE_URL}${this.$route.path}` },
			],
		}
	},
})
</script>

<style scoped>
.title {
	color: #fff;
	font-family: jaf-bernina-sans-condensed, sans-serif;
	font-size: 2rem;
	font-weight: bold;
}
</style>
