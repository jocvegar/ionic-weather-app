<template>
  <ion-list v-if="weather?.daily">
    <ion-item v-for="(daily, idx) in weather.daily" :key="idx">
      <ion-avatar slot="start" class="weather-background">
        <img :src="getWeatherImageUrl(daily.weather[0].icon, '2x')" />
      </ion-avatar>
      <ion-label>
        <h1>{{ formatTemperature(daily.temp.day, "C") }}</h1>
        <h2>{{ daily.weather[0].description }}</h2>
        <p>
          {{
            new Date(daily.dt * 1000).toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
        </p>
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useWeather } from "./weather.service";
import commonIonicComponents from "@/shared/common-ionic-components";
import { IonAvatar, IonItem, IonLabel, IonList } from "@ionic/vue";

export default defineComponent({
  components: {
    IonAvatar,
    IonItem,
    IonLabel,
    IonList,
    ...commonIonicComponents,
  },
  setup() {
    const { formatTemperature, getWeather, getWeatherImageUrl, weather } =
      useWeather();

    onMounted(getWeather);

    return {
      formatTemperature,
      getWeatherImageUrl,
      weather,
    };
  },
});
</script>

<style scoped>
.weather-background {
  background-color: skyblue;
  border-radius: 100%;
  border: 2px solid white;
}
</style>
