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
	font-size: 1.2rem;
	font-weight: 500;
	line-height: 1.6rem;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	background: rgb(34, 30, 66);
	border-radius: 6px;
	margin-bottom: 10px;
	padding: 8px;
	color: rgb(136, 144, 181);
	text-transform: uppercase;
	flex: 0 0 auto;
}
</style>
