<template>
  <div
    class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-5 mx-auto">
    <ChartArticle
      v-for="article in data"
      :chartData="article"
      :key="article.title" />
  </div>
</template>

<script setup lang="ts">
import { data } from "../data/TechnicalExercise.json";
import ChartArticle from "../components/ChartArticle.vue";
</script>
