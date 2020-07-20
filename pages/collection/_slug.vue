<template>
	<div>
		{{ collection }}
	</div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

export default {
	async asyncData ({ $strapi, params }: Context & { $strapi: any }) {
		const collection = await $strapi.find('skin-collections', { slug: params.slug })

		return { collection: collection.pop() }
	},
	data: () => ({}),
	computed: {},
}
</script>
