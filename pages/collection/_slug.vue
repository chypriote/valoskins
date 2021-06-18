<template>
	<div>
		{{ collection }}
	</div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'

export default Vue.extend({
	async asyncData ({ params, $api }: Context) {
		const collection = await $api.getSkinCollectionBySlug(params.slug)

		return { collection }
	},
})
</script>
