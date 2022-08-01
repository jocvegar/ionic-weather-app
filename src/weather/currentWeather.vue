<template>
  <div>weather:{{ weather }}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useWeather } from "./weather.service";

export default defineComponent({
  setup() {
    const { weather, getWeather } = useWeather();
    onMounted(getWeather);
    return { weather };
  },
});
</script>
