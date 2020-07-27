<template>
	<div>
		{{ collection }}
	</div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

export default {
	async asyncData ({ store, params }: Context) {
		const collection = await store.getters.collection(params.slug)

		return { collection }
	},
	data: () => ({}),
	computed: {},
}
</script>
