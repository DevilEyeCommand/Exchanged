<template>
  <div class="container mx-auto">
    <UseTitleBox icon="material-symbols:map-sharp" textOne="ที่เที่ยว" textTwo="อำเภอ"/>
    <div class="flex flex-wrap justify-center gap-4 my-4">
      <div v-for="item in data" :key="item.id" class="w-36 lg:w-96">
        <img
          :src="item.image"
          :alt="item.title"
          class="w-[423px h-[234px] object-cover rounded-lg hover:zoomin  transition duration-300"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref([
  {
    id: 1,
    image: "https://www.paiduaykan.com/wp-content/uploads/2024/05/north.jpg",
    title: "ภาคเหนือ",
    description: "This is card 1",
  },
  {
    id: 2,
    image: "https://www.paiduaykan.com/wp-content/uploads/2024/05/central.jpg",
    title: "ภาคกลาง",
    description: "This is card 2",
  },
  {
    id: 3,
    image:
      "https://www.paiduaykan.com/wp-content/uploads/2024/05/north-east.jpg",
    title: "ภาคตะวันออกเฉียงเหนือ",
    description: "This is card 3",
  },
  {
    id: 4,
    image: "https://www.paiduaykan.com/wp-content/uploads/2024/05/east.jpg",
    title: "ภาคตะวันออก",
    description: "This is card 3",
  },
  {
    id: 5,
    image: "https://www.paiduaykan.com/wp-content/uploads/2024/05/south.jpg",
    title: "ภาคใต้",
    description: "This is card 3",
  },
]);
</script>

<style scoped>
.card {
  @apply bg-white p-4 border border-gray-200 rounded-lg shadow-md;
}
</style>
