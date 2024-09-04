<!-- @format -->

<template>
	<div v-if="listImages.length > 0" class="flex justify-center gap-4">
		<div class="hidden lg:flex justify-center items-center cursor-pointer">
			<Icon name="fa6-solid:angle-left" class="text-primary" size="45" @click="prePage" />
		</div>
		<a-carousel ref="carousel" arrows class="min-w-20 max-w-[1080px]">
			<div v-for="img in listImages" :key="img.key">
				<img :src="img.url" class="w-full" />
			</div>
		</a-carousel>
		<div class="hidden lg:flex justify-center items-center cursor-pointer">
			<Icon name="fa6-solid:angle-right" class="text-primary" size="45" @click="nextPage" />
		</div>
	</div>
</template>
<script setup>
const listImages = defineModel();
const carousel = ref(null);

const prePage = () => {
	carousel.value.prev();
};
const nextPage = () => {
	carousel.value.next();
};
</script>
<style scoped>
:deep(.slick-slide) {
	text-align: center;
	height: 100%;
	overflow: hidden;
}
</style>
