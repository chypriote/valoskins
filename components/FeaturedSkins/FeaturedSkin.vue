<template>
	<div class="featured">
		<div class="image-wrapper">
			<img
				src="https://vignette.wikia.nocookie.net/valorant/images/a/ac/Weapon_Skin_Bundle_Luxury_V2.png/revision/latest?cb=20200406005055"
				alt="Featured collection"
				class="image"
			/>
		</div>
		<div class="featured-footer">
			<span class="flex items-center w-full text-2x1 text-white uppercase">
				Sovereign
			</span>
			<span class="flex items-center text-2x1 uppercase text-white">
				1200 <img src="~/assets/img/valorantpoints.png" alt="Valorant Points" class="w-4 ml-1" />
			</span>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.featured {
	display: flex;
	flex-direction: column;
	position: relative;
	overflow: hidden;
	border: 2px solid #d4d1cb;
	margin: .25rem 0;
}
.image-wrapper {
	width: 100%;
	height: 12rem;
	.image {
		position: absolute;
		top: -5%;
		left: 0;
		width: 100%;
		height: auto;
		transition: all 300ms ease-in-out;
	}
}
.featured-footer {
	display: flex;
	width: 100%;
	padding: 0 1rem;
	opacity: .5;
	height: 3rem;
	background-color: #2d3748;
	transition: opacity 300ms ease-in-out;
	&:hover {opacity: 1;}
}
.price {
	display: flex;
	align-items: center;
	img {width: 1rem;}
}
</style>
