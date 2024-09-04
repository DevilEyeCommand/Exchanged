<!-- @format -->

<template>
	<div class="px-4 z-10 flex items-center p-1 h-15 lg:h-20 sticky top-0 lg:static bg-base-100">
		<div class="flex flex-1 lg:justify-center items-center">
			<div class="flex flex-col">
				<!-- <div class="text-xl lg:text-3xl text-primary">Tour Sisaket</div> -->
				<UseLogo />
				<div class="text-center">sisaket-tourism.com</div>
			</div>
			<div>
				<img class="w-20" src="/assets/logo.png" />
			</div>
		</div>
		<div>
			<UseDarkMode class="hidden lg:block" />
			<a-button type="ghost" width="auto" class="lg:hidden" @click="isOpenMenu = true">
				<Icon name="fa6-solid:bars" size="25" class="text-primary" />
			</a-button>
		</div>
	</div>

	<div class="navbar bg-primary hidden lg:flex justify-center gap-4 py-4 sticky top-0 z-20">
		<div
			class="text-xl text-white hover:text-black cursor-pointer"
			:class="route.path === menu.url ? 'font-bold' : ''"
			v-for="(menu, i) in menuItems"
			:key="i"
		>
			<NuxtLink :to="menu.url">
				{{ menu.menuName }}
			</NuxtLink>
		</div>
	</div>

	<div class="drawer drawer-end z-[999]">
		<input id="menu" type="checkbox" class="drawer-toggle" v-model="isOpenMenu" />
		<div class="drawer-side">
			<div class="bg-primary min-h-full w-80 p-4 gap-4 flex flex-col">
				<div class="flex justify-between">
					<UseDarkMode />
					<Icon
						name="fa6-solid:xmark"
						size="30"
						class="ml-auto mx-4 text-white hover:text-black cursor-pointer"
						@click="isOpenMenu = false"
					/>
				</div>

				<NuxtLink
					v-for="(menu, i) in menuItems"
					:key="i"
					class="text-white text-xl hover:text-black hover:cursor-pointer hover:font-bold"
					:class="route.path === menu.url ? 'font-bold' : ''"
					@click="isOpenMenu = false"
					:to="menu.url"
				>
					{{ menu.menuName }}
				</NuxtLink>
			</div>
		</div>
	</div>

	<div class="px-4 navbar bg-primary fixed bottom-0 lg:hidden z-50 flex justify-center">
		<div class="avatar fixed bottom-4">
			<div class="ring-white ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
				<img
					src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
				/>
			</div>
		</div>
		<ul class="flex w-full justify-center">
			<li
				v-for="(menu, i) in menuBottomItems"
				:key="i"
				class="text-white text-sm hover:text-black hover:cursor-pointer hover:font-bold w-1/5 text-center"
				:class="route.path === menu.url ? 'font-bold' : ''"
			>
				<div v-if="menu.center" class="px-6"></div>
				<div v-else>
					<NuxtLink :to="menu.url">
						{{ menu.menuBottom }}
					</NuxtLink>
				</div>
			</li>
		</ul>
	</div>
</template>
<script setup>
import menuItems from "../../assets/json/menu.json";
const menuBottomItems = ref([]);
const route = useRoute();
const isOpenMenu = ref(false);

onMounted(() => {
	const menuArr = menuItems.filter((f) => f.bottomShow);
	const findCenter = Math.ceil(menuArr.length / 2);
	const mockObject = {
		menuName: "หน้าหลัก",
		menuBottom: "หน้าหลัก",
		center: true,
		bottomShow: true,
		url: "/",
	};

	menuArr.splice(findCenter, 0, mockObject);
	menuBottomItems.value = menuArr;
});
</script>
