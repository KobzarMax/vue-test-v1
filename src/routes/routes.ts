import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import ChartDetailsView from "../pages/ChartDetailsView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/chart/:date", component: ChartDetailsView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
