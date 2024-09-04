<!-- @format -->

<template>
	<div class="flex flex-col pb-[80px] lg:pb-0">
		<div v-for="(item, index) in data" :key="index" >
			<Carddistrict :dataDistrit="item"/>
		</div>
	</div>
</template>
<script setup>
	const { data, pending, error } = await useFetch('/api/travel/districts')
</script>
