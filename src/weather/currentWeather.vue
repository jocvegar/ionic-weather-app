<template>
  <ion-card v-if="weather?.current">
    <div class="weather-background">
      <img :src="getWeatherImageUrl(weather.current.weather[0].icon, '4x')" />
    </div>
    <ion-card-header>
      <ion-card-subtitle>
        {{ weather.current.weather[0].description }}
      </ion-card-subtitle>
      <ion-card-title>
        {{ formatTemperature(weather.current.temp, "C") }}
      </ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            Feels like {{ formatTemperature(weather.current.feels_like, "C") }}
          </ion-col>
          <ion-col> Wind Speed {{ weather.current.wind_speed }} m/s </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            Sunrise
            {{
              new Date(weather.current.sunrise * 1000).toLocaleTimeString(
                undefined,
                { timeStyle: "short" }
              )
            }}
          </ion-col>
          <ion-col>
            Sunset
            {{
              new Date(weather.current.sunset * 1000).toLocaleTimeString(
                undefined,
                { timeStyle: "short" }
              )
            }}
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import commonIonicComponents from "@/shared/common-ionic-components";
import { defineComponent, onMounted } from "vue";
import { useWeather } from "./weather.service";

export default defineComponent({
  components: {
    ...commonIonicComponents,
  },
  setup() {
    const { weather, getWeather, formatTemperature, getWeatherImageUrl } =
      useWeather();

    onMounted(getWeather);

    return { weather, formatTemperature, getWeatherImageUrl };
  },
});
</script>

<style scoped>
ion-card {
  max-width: 350px;
}
.weather-background {
  background-color: skyblue;
}

ion-card img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
