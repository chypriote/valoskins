<template>
	<div>
		{{ collection }}
	</div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

export default {
	async asyncData ({ $strapi, params }: Context) {
		const collection = await $strapi.find('weapon-types', { slug: params.slug })

		return { collection: collection.pop() }
	},
	data: () => ({}),
	computed: {},
}
</script>
