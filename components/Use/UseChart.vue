<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <p>Current Date: {{ currentDate }}</p>
      <p>Date 7 Days Ago: {{ date7DaysAgoFormatted }}</p>
    </div>
    <div class="flex justify-center py-4">
      <div ref="chart" class="w-full h-96 bg-base-200"></div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";

const chart = ref(null);
const formatDate = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // เดือนเริ่มจาก 0
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const getDayOfWeek = (dateString) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const date = new Date(dateString)
  const dayIndex = date.getDay()
  return daysOfWeek[dayIndex]
}

// วันที่ปัจจุบัน
const today = new Date()
const currentDate = ref(formatDate(today))

// คำนวณวันที่ย้อนหลัง 7 วัน
const date7DaysAgo = new Date(today)
date7DaysAgo.setDate(today.getDate() - 6)
const date7DaysAgoFormatted = ref(formatDate(date7DaysAgo))

const getCurrency = async (select) => {
  const response = await fetch('https://api.currencybeacon.com/v1/timeseries?api_key=XxQAzbUQ0jCGjlWqTy100dtOkSVmuSgj&base=USD&start_date='+date7DaysAgoFormatted.value+'&end_date='+currentDate.value+'')
  const currencydata = await response.json()
  return Object.entries(currencydata)
};
onMounted(async() => {
  let currencydata = await getCurrency()
  currencydata = currencydata.filter((item) => item[0] != 'meta' && item[0] != 'response')
  console.log(currencydata);
  if (chart.value) {
    const myChart = echarts.init(chart.value, "dark"); 

    const option = {
      title: {
        text: "Exchanged.COM",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["THB", "CVE", "JPY", "CNY", "USD"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [getDayOfWeek(currencydata[0][0]), getDayOfWeek(currencydata[1][0]), getDayOfWeek(currencydata[2][0]), getDayOfWeek(currencydata[3][0]), getDayOfWeek(currencydata[4][0]), getDayOfWeek(currencydata[5][0]), getDayOfWeek(currencydata[6][0])],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "THB",
          type: "line",
          stack: "Total",
          data: convertData(currencydata, "THB")
        },
        {
          name: "CVE",
          type: "line",
          stack: "Total",
          data: convertData(currencydata, "CVE"),
        },
        {
          name: "JPY",
          type: "line",
          stack: "Total",
          data: convertData(currencydata, "JPY"),
        },
        {
          name: "CNY",
          type: "line",
          stack: "Total",
          data: convertData(currencydata, "CNY"),
        },
        {
          name: "USD",
          type: "line",
          stack: "Total",
          data: convertData(currencydata, "USD"),
        },
      ],
    };
    
    myChart.setOption(option);
  }
});

const convertData = (data, type) => {
  return data.map((mp, i) => mp[1][type].toFixed(2))
} 
</script>

<style lang="scss" scoped>
.w-full {
  width: 100%;
}

.h-96 {
  height: 24rem; /* Or any other value that suits your design */
}
</style>
