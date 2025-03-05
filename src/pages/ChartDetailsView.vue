<template>
  <main class="container py-5 space-y-2.5 min-h-dvh">
    <h1 class="text-3xl text-mainBlack text-center">{{ chartData.title }}</h1>
    <p class="text-mainBlack/70 text-center text-sm mt-2">
      {{ chartData.subTitle }}
    </p>
    <p class="text-center text-xs whitespace-nowrap font-medium text-gray-500">
      {{ chartData.date }}
    </p>
    <div class="px-5 rounded-2xl mb-5 mx-auto shadow-md bg-white">
      <Chart :url="chartData.url" :points="chartData.chart" />
    </div>
    <p class="text-mainBlack/70 lg:max-w-8/12 mx-auto font-medium">
      {{ chartData.description }}
    </p>
    <router-link
      to="/"
      class="rounded-md flex items-center justify-center bg-mainBlack text-xs mx-auto text-white px-4 py-2 transition-all duration-300 hover:bg-mainBlack/20 hover:text-mainBlack w-fit"
      >Back to home</router-link
    >
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { data } from "../data/TechnicalExercise.json";
import Chart from "../components/Chart.vue";

const route = useRoute();
const date = route.params.date;

const chartData = data.find((article) => article.date === date);
</script>
