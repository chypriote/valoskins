<template>
	<div class="flex-1 p-4">
		<div class="flex content-between">
			<div class="flex flex-col">
				<div class="font-bold text-xl mb-2">{{ skin.name }}</div>
				<div>

				</div>
			</div>
			<div class="prices"></div>
		</div>
		<div class="flex justify-center">
			<div>
				<img
					class="h-40 w-auto"
					:src="skin.picture.url"
					:alt="skin.name"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { WeaponSkin } from '~/types/Weapon'

export default Vue.extend({
	props: {
		skin: {
			type: Object as () => WeaponSkin,
			required: true,
		},
	},
})
</script>
