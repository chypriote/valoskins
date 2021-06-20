<template>
	<div class="weapon-label">{{ title }}</div>
</template>

<script>
export default {
	name: 'WeaponHeader',
	props: {
		title: {
			required: true,
			type: String,
		},
	},
}
</script>

<style scoped>
.weapon-label {
	font-size: 1.1rem;
	line-height: 1.5rem;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	background: #1c2228;
	border-radius: 6px;
	margin-bottom: 10px;
	padding: 8px;
	color: #fff;
	text-transform: uppercase;
	flex: 0 0 auto;
}
</style>
