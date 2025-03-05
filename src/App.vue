<template>
  <Header />
  <main class="py-5 bg-green-200">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<style scoped></style>
