<!-- @format -->

<template>
	<div class="px-4">
		<div class="h-60 flex justify-center items-center flex-col gap-4">
			<div class="text-3xl lg:text-[60px]">
				อยาก
				<span class="text-primary">ไปที่ไหน?</span>
			</div>
			<div class="text-2xl">ไปเที่ยวไหนกันดี</div>
		</div>

		<div class="px-4 mb-20">
			<UseCarousel v-model="mockUpImageUrl" />
		</div>
	</div>
</template>
<script setup>
import sisaket_1 from "@/assets/imageMock/slide/sisaket_1.jpg";
import sisaket_2 from "@/assets/imageMock/slide/sisaket_2.jpg";
import sisaket_3 from "@/assets/imageMock/slide/sisaket_3.jpg";

const carousel = ref(null);
const mockUpImageUrl = [
	{
		key: 1,
		url: sisaket_1,
	},
	{
		key: 2,
		url: sisaket_2,
	},
	{
		key: 3,
		url: sisaket_3,
	},
];
</script>
