<template>
  <div class="card bg-base-100 max-w-96">
    <figure class="overflow-hidden relative">
      <img :src="detail.img" class="transition-transform duration-300 hover:scale-110 " />
    </figure>
    <div class="p-4">
      <div v-if="detail.date">{{ detail.date }}</div>
      <div
        class="badge bg-primary text-white text-xl py-5 px-3 rounded-lg hover:text-black cursor-pointer"
      >
        {{ detail.tag }}
      </div>

      <div class="text-sm lg:text-xl hover:text-primary cursor-pointer">
        {{ detail.title }}
      </div>
    </div>
  </div>
</template>


<script setup>
defineProps({
  detail: {
    type: Object,
    required: true,
  },
});
</script>
