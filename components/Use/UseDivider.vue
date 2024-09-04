<!-- @format -->

<template>
	<div class="flex justify-between gap-4">
		<hr class="items-center w-full my-auto" :class="props.class" />
		<slot />
		<hr class="items-center w-full my-auto" :class="props.class" />
	</div>
</template>
<script setup>
const props = defineProps({
	class: String,
});
</script>
