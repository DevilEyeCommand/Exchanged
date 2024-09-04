<template>
  <div class="bg-base-200">
    <div class="container mx-auto px-4">
      <UseTitleBox
        v-if="travelType === 'travel'"
        textOne="ท่อง"
        textTwo="เที่ยว"
      />
      <UseTitleBox
        v-else-if="travelType === 'food'"
        textOne="คาเฟ่"
        textTwo="ร้านอาหาร"
      />
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <UseCardTravel
          v-for="(place, index) in paginatedPlaces"
          :key="index"
          :detail="place"
        />
      </div>
      <UsePagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @update:currentPage="(page) => (currentPage = page)"
      />
    </div>
  </div>
</template>

<script setup>
import img1 from "@/assets/imageMock/1.jpg";
import img2 from "@/assets/imageMock/2.jpg";
import img3 from "@/assets/imageMock/3.jpg";
import img4 from "@/assets/imageMock/4.jpg";
import img5 from "@/assets/imageMock/5.jpg";
import img6 from "@/assets/imageMock/6.jpg";
import img7 from "@/assets/imageMock/7.jpg";
import img8 from "@/assets/imageMock/8.jpeg";
import img9 from "@/assets/imageMock/9.jpg";
import img10 from "@/assets/imageMock/10.jpg";
import img11 from "@/assets/imageMock/11.jpg";
import img12 from "@/assets/imageMock/12.jpg";
import img13 from "@/assets/imageMock/13.jpg";
import img14 from "@/assets/imageMock/14.jpg";
import img15 from "@/assets/imageMock/15.jpg";
import img16 from "@/assets/imageMock/16.jpg";

const route = useRoute();
const travelType = route.params.type;

const currentPage = ref(1);
const itemsPerPage = 8; // จำนวนรายการต่อหน้า

const mockPlaces = [
  //  สำหรับ tag: "ท่องเที่ยว"
  {
    img: img1,
    title: "ปราสาทปรางค์กู่ ศรีสะเกษ",
    date: "2022-01-01",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 1",
  },
  {
    img: img2,
    title: "วัดพระธาตุสุพรรณหงส์ ศรีสะเกษ",
    date: "21/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 2",
  },
  {
    img: img3,
    title: "พระธาตุเรืองรอง ศรีสะเกษ",
    date: "17/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 3",
  },
  {
    img: img4,
    title: "วัดล้านขวด ศรีสะเกษ",
    date: "10/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 4",
  },
  {
    img: img5,
    title: "ปราสาทวัดสระกำแพงใหญ่ ศรีสะเกษ",
    date: "05/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 5",
  },
  {
    img: img6,
    title: "ผามออีแดง ศรีสะเกษ",
    date: "03/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 6",
  },
  {
    img: img7,
    title: "วัดมหาพุทธาราม",
    date: "28/07/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 7",
  },
  {
    img: img8,
    title: "หอคอยศรีลำดวนเฉลิมพระเกียรติ",
    date: "20/07/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 8",
  },
  {
    img: img7,
    title: "วัดมหาพุทธาราม",
    date: "28/07/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 7",
  },
  {
    img: img4,
    title: "วัดล้านขวด ศรีสะเกษ",
    date: "10/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 4",
  },
  {
    img: img1,
    title: "ปราสาทปรางค์กู่ ศรีสะเกษ",
    date: "2022-01-01",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 1",
  },
  {
    img: img6,
    title: "ผามออีแดง ศรีสะเกษ",
    date: "03/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 6",
  },
  {
    img: img3,
    title: "พระธาตุเรืองรอง ศรีสะเกษ",
    date: "17/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 3",
  },
  {
    img: img8,
    title: "หอคอยศรีลำดวนเฉลิมพระเกียรติ",
    date: "20/07/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 8",
  },
  {
    img: img5,
    title: "ปราสาทวัดสระกำแพงใหญ่ ศรีสะเกษ",
    date: "05/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 5",
  },
  {
    img: img2,
    title: "วัดพระธาตุสุพรรณหงส์ ศรีสะเกษ",
    date: "21/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 2",
  },
  {
    img: img4,
    title: "วัดล้านขวด ศรีสะเกษ",
    date: "10/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 4",
  },
  {
    img: img6,
    title: "ผามออีแดง ศรีสะเกษ",
    date: "03/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 6",
  },
  {
    img: img3,
    title: "พระธาตุเรืองรอง ศรีสะเกษ",
    date: "17/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 3",
  },
  {
    img: img1,
    title: "ปราสาทปรางค์กู่ ศรีสะเกษ",
    date: "2022-01-01",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 1",
  },
  {
    img: img5,
    title: "ปราสาทวัดสระกำแพงใหญ่ ศรีสะเกษ",
    date: "05/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 5",
  },
  {
    img: img2,
    title: "วัดพระธาตุสุพรรณหงส์ ศรีสะเกษ",
    date: "21/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 2",
  },
  {
    img: img8,
    title: "หอคอยศรีลำดวนเฉลิมพระเกียรติ",
    date: "20/07/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 8",
  },
  {
    img: img7,
    title: "วัดมหาพุทธาราม",
    date: "28/07/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 7",
  },
  {
    img: img3,
    title: "พระธาตุเรืองรอง ศรีสะเกษ",
    date: "17/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 3",
  },
  {
    img: img4,
    title: "วัดล้านขวด ศรีสะเกษ",
    date: "10/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 4",
  },
  {
    img: img1,
    title: "ปราสาทปรางค์กู่ ศรีสะเกษ",
    date: "2022-01-01",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 1",
  },
  {
    img: img5,
    title: "ปราสาทวัดสระกำแพงใหญ่ ศรีสะเกษ",
    date: "05/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 5",
  },
  {
    img: img6,
    title: "ผามออีแดง ศรีสะเกษ",
    date: "03/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 6",
  },
  {
    img: img8,
    title: "หอคอยศรีลำดวนเฉลิมพระเกียรติ",
    date: "20/07/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 8",
  },
  {
    img: img2,
    title: "วัดพระธาตุสุพรรณหงส์ ศรีสะเกษ",
    date: "21/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 2",
  },
  {
    img: img7,
    title: "วัดมหาพุทธาราม",
    date: "28/07/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 7",
  },
  {
    img: img3,
    title: "พระธาตุเรืองรอง ศรีสะเกษ",
    date: "17/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 3",
  },
  {
    img: img4,
    title: "วัดล้านขวด ศรีสะเกษ",
    date: "10/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 4",
  },
  {
    img: img1,
    title: "ปราสาทปรางค์กู่ ศรีสะเกษ",
    date: "2022-01-01",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 1",
  },
  {
    img: img6,
    title: "ผามออีแดง ศรีสะเกษ",
    date: "03/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 6",
  },
  {
    img: img5,
    title: "ปราสาทวัดสระกำแพงใหญ่ ศรีสะเกษ",
    date: "05/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 5",
  },
  {
    img: img2,
    title: "วัดพระธาตุสุพรรณหงส์ ศรีสะเกษ",
    date: "21/08/2024",
    tag: "ท่องเที่ยว",
    description: "รายละเอียดของสถานที่ท่องเที่ยวที่ 2",
  },

  //  สำหรับ tag: "คาเฟ่"
  {
    img: img9,
    title: "Cloud Cafe Sisaket คลาวด์ คาเฟ่",
    date: "15/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 1",
  },
  {
    img: img10,
    title: "TAEMICK cafe' and garden",
    date: "22/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 2",
  },
  {
    img: img11,
    title: "Cafe De Tree",
    date: "18/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 3",
  },
  {
    img: img12,
    title: "หลงป่าคาเฟ่ (Lhong Pah Café)",
    date: "12/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 4",
  },
  {
    img: img13,
    title: "Sept coffee",
    date: "20/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 5",
  },
  {
    img: img14,
    title: "Oxygen Factory Cafe Sisaket",
    date: "01/09/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 6",
  },
  {
    img: img15,
    title: "คาเฟ่ อิน แอนด์ โค",
    date: "28/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 7",
  },
  {
    img: img16,
    title: "Vivid Cafe & Brunch: วิวิธ คาเฟ่แอนด์บรันช์ ศรีสะเกษ",
    date: "22/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 8",
  },
  {
    img: img9,
    title: "Cloud Cafe Sisaket คลาวด์ คาเฟ่",
    date: "15/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 1",
  },
  {
    img: img10,
    title: "TAEMICK cafe' and garden",
    date: "22/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 2",
  },
  {
    img: img11,
    title: "Cafe De Tree",
    date: "18/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 3",
  },
  {
    img: img12,
    title: "หลงป่าคาเฟ่ (Lhong Pah Café)",
    date: "12/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 4",
  },
  {
    img: img13,
    title: "Sept coffee",
    date: "20/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 5",
  },
  {
    img: img14,
    title: "Oxygen Factory Cafe Sisaket",
    date: "01/09/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 6",
  },
  {
    img: img15,
    title: "คาเฟ่ อิน แอนด์ โค",
    date: "28/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 7",
  },
  {
    img: img16,
    title: "Vivid Cafe & Brunch: วิวิธ คาเฟ่แอนด์บรันช์ ศรีสะเกษ",
    date: "22/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 8",
  },
  {
    img: img9,
    title: "Cloud Cafe Sisaket คลาวด์ คาเฟ่",
    date: "15/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 1",
  },
  {
    img: img10,
    title: "TAEMICK cafe' and garden",
    date: "22/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 2",
  },
  {
    img: img11,
    title: "Cafe De Tree",
    date: "18/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 3",
  },
  {
    img: img12,
    title: "หลงป่าคาเฟ่ (Lhong Pah Café)",
    date: "12/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 4",
  },
  {
    img: img13,
    title: "Sept coffee",
    date: "20/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 5",
  },
  {
    img: img14,
    title: "Oxygen Factory Cafe Sisaket",
    date: "01/09/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 6",
  },
  {
    img: img15,
    title: "คาเฟ่ อิน แอนด์ โค",
    date: "28/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 7",
  },
  {
    img: img16,
    title: "Vivid Cafe & Brunch: วิวิธ คาเฟ่แอนด์บรันช์ ศรีสะเกษ",
    date: "22/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 8",
  },
  {
    img: img9,
    title: "Cloud Cafe Sisaket คลาวด์ คาเฟ่",
    date: "15/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 1",
  },
  {
    img: img10,
    title: "TAEMICK cafe' and garden",
    date: "22/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 2",
  },
  {
    img: img11,
    title: "Cafe De Tree",
    date: "18/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 3",
  },
  {
    img: img12,
    title: "หลงป่าคาเฟ่ (Lhong Pah Café)",
    date: "12/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 4",
  },
  {
    img: img13,
    title: "Sept coffee",
    date: "20/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 5",
  },
  {
    img: img14,
    title: "Oxygen Factory Cafe Sisaket",
    date: "01/09/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 6",
  },
  {
    img: img15,
    title: "คาเฟ่ อิน แอนด์ โค",
    date: "28/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 7",
  },
  {
    img: img16,
    title: "Vivid Cafe & Brunch: วิวิธ คาเฟ่แอนด์บรันช์ ศรีสะเกษ",
    date: "22/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 8",
  },
  {
    img: img9,
    title: "Cloud Cafe Sisaket คลาวด์ คาเฟ่",
    date: "15/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 1",
  },
  {
    img: img10,
    title: "TAEMICK cafe' and garden",
    date: "22/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 2",
  },
  {
    img: img11,
    title: "Cafe De Tree",
    date: "18/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 3",
  },
  {
    img: img12,
    title: "หลงป่าคาเฟ่ (Lhong Pah Café)",
    date: "12/08/2024",
    tag: "คาเฟ่",
    description: "รายละเอียดของร้านคาเฟ่ที่ 4",
  },
];

const filteredPlaces = computed(() => {
  if (travelType === "travel") {
    return mockPlaces.filter((place) => place.tag === "ท่องเที่ยว");
  } else if (travelType === "food") {
    return mockPlaces.filter((place) => place.tag === "คาเฟ่");
  }
  return [];
});

const totalPages = computed(() => {
  return Math.ceil(filteredPlaces.value.length / itemsPerPage);
});

const paginatedPlaces = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredPlaces.value.slice(start, end);
});
</script>
