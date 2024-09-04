<!-- @format -->

<template>
	<div class="py-4 lg:py-20">
		<div class="flex justify-center">
			<Icon :name="icon" class="text-primary" size="75" />
		</div>
		<UseDivider class="border-primary">
			<div class="text-4xl text-nowrap">
				{{ textOne }}<span class="text-primary">{{ textTwo }}</span>
			</div>
		</UseDivider>
	</div>
</template>
<script setup>
const props = defineProps({
	class: String,
	textOne: String,
	textTwo: String,
	icon: {
		type: String,
		required: false,
		default: "",
	},
});
</script>
