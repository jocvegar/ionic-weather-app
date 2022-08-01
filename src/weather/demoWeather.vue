<template>
  <div>
    <current-weather></current-weather>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CurrentWeather from "./currentWeather.vue";
export default defineComponent({
  components: {
    CurrentWeather,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
