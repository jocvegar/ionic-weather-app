<template>
  <ion-page v-if="weather">
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <img
            :src="getWeatherImageUrl(weather?.current?.weather[0]?.icon, '2x')"
          />
          <ion-label>
            Current
            {{ formatTemperature(weather?.current?.temp, "C") }}
          </ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="calendarOutline" />
          <ion-label>Forecast</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { onMounted } from "vue";
import {
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/vue";
import { calendarOutline } from "ionicons/icons";
import { useWeather } from "../weather/weather.service";

export default {
  name: "Tabs",
  components: {
    IonIcon,
    IonLabel,
    IonPage,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
  },
  setup() {
    const { weather, getWeather, formatTemperature, getWeatherImageUrl } =
      useWeather();

    onMounted(getWeather);

    return {
      calendarOutline,
      formatTemperature,
      getWeather,
      getWeatherImageUrl,
      weather,
    };
  },
};
</script>

<style scoped>
img {
  height: 26px;
  width: 26px;
  margin-bottom: 0px;
  margin-top: 3px;
  background-color: skyblue;
  border-radius: 100%;
}
</style>
