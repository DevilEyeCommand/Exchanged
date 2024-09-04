<!-- @format -->

<template>
    <div class="flex flex-col lg:flex-row lg:max-w-[1024px] xl:max-w-[1280px] py-4 px-4 gap-4 mx-auto">
        <img class="xl:w-[380px] lg:w-[340px] rounded-lg" :src="dataDistrit.image">
        <div class="flex flex-col gap-4 w-full">
            <div class="text-primary lg:text-[38px] text-[30px]">{{ dataDistrit.name_in_thai }}</div>
            <div class="flex flex-wrap gap-y-4">
                <div v-for="(item, index) in dataDistrit.sub_districts" :key="index" class="flex items-center gap-2 w-1/4 lg:text-[20px] cursor-pointer">
                    <Icon name="ep:arrow-right" size="20" class="text-primary"/>
                    <span class="text-ellipsis whitespace-nowrap overflow-hidden">{{ item.name_in_thai }}</span>
                </div>
            </div>
        </div>
        <!-- {{ dataDistrit.amphoe }} -->
    </div>
</template>
<script setup>

const props = defineProps({
    dataDistrit: {
        type: Object,
        default: false,
        required: false,
    },
})
const mockData = ref({
    "id": 270,
    "code": 3301,
    "name_in_thai": "เมืองศรีสะเกษ",
    "name_in_english": "Mueang Si Sa Ket",
    "province_id": 22,
    "image": "https://www.paiduaykan.com/wp-content/uploads/2024/08/DSC07839-1000x667.jpg",
    "sub_districts": [
      {
        "id": 2074,
        "code": 330101,
        "name_in_thai": "เมืองเหนือ",
        "name_in_english": "Mueang Nuea",
        "latitude": 15.103,
        "longitude": 104.336,
        "district_id": 270,
        "zip_code": 33000
      },
      {
        "id": 2075,
        "code": 330103,
        "name_in_thai": "คูซอด",
        "name_in_english": "Khu Sot",
        "latitude": 15.213,
        "longitude": 104.278,
        "district_id": 270,
        "zip_code": 33000
      },
      {
        "id": 2076,
        "code": 330104,
        "name_in_thai": "ซำ",
        "name_in_english": "Sam",
        "latitude": 15.04,
        "longitude": 104.332,
        "district_id": 270,
        "zip_code": 33000
      },
      {
        "id": 2077,
        "code": 330105,
        "name_in_thai": "จาน",
        "name_in_english": "Chan",
        "latitude": 14.989,
        "longitude": 104.398,
        "district_id": 270,
        "zip_code": 33000
      },
      {
        "id": 2078,
        "code": 330106,
        "name_in_thai": "ตะดอบ",
        "name_in_english": "Tadop",
        "latitude": 15.037,
        "longitude": 104.434,
        "district_id": 270,
        "zip_code": 33000
      },
      {
        "id": 2079,
        "code": 330107,
        "name_in_thai": "หนองครก",
        "name_in_english": "Nong Khrok",
        "latitude": 15.078,
        "longitude": 104.295,
        "district_id": 270,
        "zip_code": 33000
      },
      {
        "id": 2080,
        "code": 330111,
        "name_in_thai": "โพนข่า",
        "name_in_english": "Phon Kha",
        "latitude": 15.055,
        "longitude": 104.385,
        "district_id": 270,
        "zip_code": 33000
      },
      {
        "id": 2081,
        "code": 330112,
        "name_in_thai": "โพนค้อ",
        "name_in_english": "Phon Kho",
        "latitude": 15.015,
        "longitude": 104.369,
        "district_id": 270,
        "zip_code": 33000
      },
      {
        "id": 2082,
        "code": 330116,
        "name_in_thai": "หญ้าปล้อง",
        "name_in_english": "Ya Plong",
        "latitude": 15.135,
        "longitude": 104.293,
        "district_id": 270,
        "zip_code": 33000
      },
      {
        "id": 2083,
        "code": 330118,
        "name_in_thai": "ทุ่ม",
        "name_in_english": "Thum",
        "latitude": 14.98,
        "longitude": 104.336,
        "district_id": 270,
        "zip_code": 33000
      },
      {
        "id": 2084,
        "code": 330119,
        "name_in_thai": "หนองไฮ",
        "name_in_english": "Nong Hai",
        "latitude": 15.007,
        "longitude": 104.427,
        "district_id": 270,
        "zip_code": 33000
      },
      {
        "id": 2085,
        "code": 330121,
        "name_in_thai": "หนองแก้ว",
        "name_in_english": "Nong Kaeo",
        "latitude": 15.096,
        "longitude": 104.433,
        "district_id": 270,
        "zip_code": 33000
      },
      {
        "id": 2086,
        "code": 330122,
        "name_in_thai": "น้ำคำ",
        "name_in_english": "Nam Kham",
        "latitude": 15.167,
        "longitude": 104.34,
        "district_id": 270,
        "zip_code": 33000
      },
      {
        "id": 2087,
        "code": 330123,
        "name_in_thai": "โพธิ์",
        "name_in_english": "Pho",
        "latitude": 15.124,
        "longitude": 104.394,
        "district_id": 270,
        "zip_code": 33000
      },
      {
        "id": 2088,
        "code": 330124,
        "name_in_thai": "หมากเขียบ",
        "name_in_english": "Mak Khiap",
        "latitude": 15.051,
        "longitude": 104.258,
        "district_id": 270,
        "zip_code": 33000
      },
      {
        "id": 2089,
        "code": 330127,
        "name_in_thai": "หนองไผ่",
        "name_in_english": "Nong Phai",
        "latitude": 15.143,
        "longitude": 104.271,
        "district_id": 270,
        "zip_code": 33000
      }
    ]
  },
  {
    "id": 271,
    "code": 3302,
    "name_in_thai": "ยางชุมน้อย",
    "name_in_english": "Yang Chum Noi",
    "province_id": 22,
    "image": "https://www.paiduaykan.com/wp-content/uploads/2024/08/DSC07839-1000x667.jpg",
    "sub_districts": [
      {
        "id": 2090,
        "code": 330201,
        "name_in_thai": "ยางชุมน้อย",
        "name_in_english": "Yang Chum Noi",
        "latitude": 15.26,
        "longitude": 104.401,
        "district_id": 271,
        "zip_code": 33190
      },
      {
        "id": 2091,
        "code": 330202,
        "name_in_thai": "ลิ้นฟ้า",
        "name_in_english": "Lin Fa",
        "latitude": 15.18,
        "longitude": 104.422,
        "district_id": 271,
        "zip_code": 33190
      },
      {
        "id": 2092,
        "code": 330203,
        "name_in_thai": "คอนกาม",
        "name_in_english": "Khon Kam",
        "latitude": 15.223,
        "longitude": 104.36,
        "district_id": 271,
        "zip_code": 33190
      },
      {
        "id": 2093,
        "code": 330204,
        "name_in_thai": "โนนคูณ",
        "name_in_english": "Non Khun",
        "latitude": 15.302,
        "longitude": 104.354,
        "district_id": 271,
        "zip_code": 33190
      },
      {
        "id": 2094,
        "code": 330205,
        "name_in_thai": "กุดเมืองฮาม",
        "name_in_english": "Kut Mueang Ham",
        "latitude": 15.235,
        "longitude": 104.319,
        "district_id": 271,
        "zip_code": 33190
      },
      {
        "id": 2095,
        "code": 330206,
        "name_in_thai": "บึงบอน",
        "name_in_english": "Bueng Bon",
        "latitude": 15.251,
        "longitude": 104.444,
        "district_id": 271,
        "zip_code": 33190
      },
      {
        "id": 2096,
        "code": 330207,
        "name_in_thai": "ยางชุมใหญ่",
        "name_in_english": "Yang Chum Yai",
        "latitude": 15.212,
        "longitude": 104.413,
        "district_id": 271,
        "zip_code": 33190
      }
    ]
  }
)
const dataDistrit = ref(props.dataDistrit?props.dataDistrit:mockData.value)

</script>
