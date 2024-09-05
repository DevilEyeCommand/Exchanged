<template>
  <div class="flex justify-center py-4">
    <div ref="chart" class="w-full h-96 bg-base-200"></div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";

const chart = ref(null);

onMounted(() => {
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
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
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
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: "Search Engine",
          type: "line",
          stack: "Total",
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    };

    myChart.setOption(option);
  }
});
</script>

<style lang="scss" scoped>
.w-full {
  width: 100%;
}

.h-96 {
  height: 24rem; /* Or any other value that suits your design */
}
</style>
