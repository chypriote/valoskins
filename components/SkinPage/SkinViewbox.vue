<template>
	<div class="flex-1 px-4 py-2">
		<div class="flex content-between">
			<div class="flex flex-col">
				<div class="font-bold text-xl mb-2">{{ skin.name }}</div>
				<div class="flex leading-none text-sm text-gray-500">
					<img v-if="skin.rarity !== Rarity.STANDARD" :src="rarity_icon" :alt="skin.rarity" :title="skin.rarity" class="mr-2 w-4" />
					<p>{{ skin.rarity |capitalize }}</p>
				</div>
			</div>
			<div class="prices"></div>
		</div>
		<div class="flex flex-col justify-center">
			<div class="mx-auto">
				<img class="h-40 w-auto" :src="skin.picture.url" :alt="skin.name" />
			</div>
			<div v-if="chromas.length" class="flex justify-center">
				<div v-for="chroma in chromas" :key="chroma.id">
					<img class="h-16 w-auto" :src="chroma.media.url" :alt="chroma.displayText" :title="chroma.displayText" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { orderBy } from 'lodash-es'
import { Upgrade, WeaponSkin, Rarity } from '~/types/Weapon'

export default Vue.extend({
	props: {
		skin: {
			type: Object as () => WeaponSkin,
			required: true,
		},
	},
	data: () => ({ Rarity }),
	computed: {
		rarity_icon () { return require(`~/assets/img/tiers/${this.skin?.rarity}.png`) },
		chromas () { return orderBy(this.skin.skin_upgrades.filter(upgrade => upgrade.type === Upgrade.CHROMA), 'level', 'asc') },
	},
})
</script>
