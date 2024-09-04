<template>
  <div class="pb-10 lg:pb-0">
    <UseTitleBox textOne="อา" textTwo="จารย์" />

    <!-- Display information for "อาจารย์ที่ปรึกษา" -->
    <div
      v-for="person in filteredInformation('อาจารย์ที่ปรึกษา')"
      :key="person.id"
      class="flex items-center justify-center "
    >
      <div class="flex max-w-lg w-full flex-col-reverse lg:flex-row justify-center gap-4 items-center">
        <div class="w-2/3  ">
          <h2 class="text-xl font-bold text-indigo-600 hover:text-primary cursor-pointer">
            {{ person.name }}
          </h2>
          <p class="text-sm text-gray-500 mb-4 hover:text-primary cursor-pointer">{{ person.role }}</p>
          <p class="text-gray-600 text-sm hover:text-primary cursor-pointer ">
            สาขา{{ person.major }} มหาลัย{{ person.university }}
          </p>
        </div>
        <div class="avatar flex justify-center items-center">
          <div class="w-40 h-40 rounded-full overflow-hidden relative">
            <img :src="person.image" class="transition-transform duration-300 hover:scale-110" />
          </div>
        </div>
      </div>
    </div>

    <UseTitleBox textOne="นักศึ" textTwo="กษา" />

    <!-- Display information for "นักศึกษา" -->
    <div
      v-for="person in filteredInformation('นักศึกษา')"
      :key="person.id"
      class="flex items-center justify-center p-6"
    >
      <div class="flex max-w-lg w-full flex-col-reverse lg:flex-row justify-center gap-4 items-center">
        <div class="w-2/3 pr-4">
          <h2 class="text-xl font-bold text-indigo-600 hover:text-primary cursor-pointer">
            {{ person.name }}
          </h2>
          <p class="text-sm text-gray-500 mb-4 hover:text-primary cursor-pointer">รหัสนักศึกษา {{ person.id }}</p>
          <p class="text-gray-600 text-sm hover:text-primary cursor-pointer">
            {{ person.major }} มหาลัย{{ person.university }}
          </p>
        </div>
        <div class="avatar flex justify-center items-center">
          <div class="w-40 rounded-full overflow-hidden relative">
            <img :src="person.image" class="transition-transform duration-300 hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import professional from "../assets/image/avatar-13.png";
import student1 from "../assets/image/avatar-1.png";
import student2 from "../assets/image/avatar-3.png";
const infomation = [
  {
    name: "นายณัฐธิวุฒิ คุ้มกล่ำ",
    id: "6412269108",
    major: "สาขาเทคโนโลยีคอมพิวเตอร์และดิจิทัล คณะศิลปศาสตร์และวิทยาศาสตร์",
    university: "ราชภัฏศรีสะเกษ",
    role: "นักศึกษา",
    image: student1,
  },
  {
    name: "นายสุวิจักขณ์ สีทาดี",
    id: "6412269125",
    major: "สาขาเทคโนโลยีคอมพิวเตอร์และดิจิทัล คณะศิลปศาสตร์และวิทยาศาสตร์",
    university: "ราชภัฏศรีสะเกษ",
    role: "นักศึกษา",
    image: student2,
  },
  {
    name: "ผู้ช่วยศาสตราจารย์ ธีรพงศ์ สงผัด",
    id: "",
    major: "เทคโนโลยีคอมพิวเตอร์และดิจิทัล",
    role: "อาจารย์ที่ปรึกษา",
    university: "ราชภัฏศรีสะเกษ",
    image: professional,
  },
];

// Filter information by role
function filteredInformation(role) {
  return infomation.filter((person) => person.role === role);
}
</script>

<style scoped>
/* Add custom styles if necessary */
</style>
