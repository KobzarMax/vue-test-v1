<template>
  <div>
    <LineChart
      v-if="chartData"
      :chart-data="chartData"
      :chart-options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  Chart as ChartJS,
  LineController,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { LineChart } from "vue-chart-3";
import { defineProps } from "vue";
import { ChartDataPoint } from "../types/ChartDataPoint";
import { formatDate } from "../utils";

ChartJS.register(
  LineController,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const props = defineProps<{
  points: ChartDataPoint[];
  url: string;
}>();

const chartData = computed(() => ({
  labels: props.points.map((point) => formatDate(point.x)),
  datasets: [
    {
      label: "xLine",
      data: props.points.map((point) => point.y),
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 2,
      fill: true,
      pointRadius: 5,
      pointBackgroundColor: "rgba(75, 192, 192, 1)",
    },
  ],
}));

// Chart options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: "category",
    },
  },
};
</script>
