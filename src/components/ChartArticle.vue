<template>
  <div class="bg-white shadow-md p-4 mb-4 rounded-lg space-y-1.5">
    <div class="flex items-start justify-between gap-4">
      <router-link
        :to="`/chart/${chartData.date}`"
        class="text-lg md:text-xl font-semibold text-wrap text-mainBlack">
        {{ chartData.title }}
      </router-link>
      <span class="text-xs whitespace-nowrap font-medium text-gray-500">{{
        chartData.date
      }}</span>
    </div>
    <p class="text-xs md:text-sm text-mainBlack/70">{{ chartData.subTitle }}</p>
    <a
      class="underline text-xs text-mainBlack/70 transition-all duration-300 hover:text-mainBlack/100 block"
      :href="chartData.url"
      target="_blank"
      >{{ chartData.url }}</a
    >
    <Chart :url="chartData.url" :points="chartData.chart" />
    <p class="line-clamp-3">{{ chartData.description }}</p>
    <router-link
      :to="`/chart/${chartData.date}`"
      class="rounded-md flex items-center justify-center bg-mainBlack text-xs text-white px-4 py-2 transition-all duration-300 hover:bg-mainBlack/20 hover:text-mainBlack w-fit"
      >View full data</router-link
    >
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import ChartArticle from "../types/ChartArticle";
import Chart from "./Chart.vue";

const props = defineProps<{
  chartData: ChartArticle;
}>();
</script>
