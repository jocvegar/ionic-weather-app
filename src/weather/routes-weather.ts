import { RouteRecordRaw } from "vue-router";

export const weatherRoutes: RouteRecordRaw[] = [
  {
    path: "/weather",
    name: "Weather",
    component: () => import("./demoWeather.vue"),
  },
];
