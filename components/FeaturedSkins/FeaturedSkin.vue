<template>
	<div class="border-solid border-4 my-1 featured flex flex-col">
		<div class="image-wrapper">
			<img
				src="https://vignette.wikia.nocookie.net/valorant/images/a/ac/Weapon_Skin_Bundle_Luxury_V2.png/revision/latest?cb=20200406005055"
				class="image"
			/>
		</div>
		<div class="flex w-full z-0 h-12 bg-gray-800 px-4 opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-100">
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
	position: relative;
	overflow: hidden;
}
.image-wrapper {
	width: 100%;
	height: 12rem;
}
.image {
	position: absolute;
	top: -5%;
	left: 0;
	width: 100%;
	height: auto;
	transition: all 300ms ease-in-out;
}
.price {
	display: flex;
	align-items: center;
	img {width: 1rem;}
}
</style>
