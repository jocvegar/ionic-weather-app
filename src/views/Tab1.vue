<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Current Weather</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Current Weather</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="auto">
            <current-weather></current-weather>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import CurrentWeather from "@/weather/currentWeather.vue";
import commonIonicComponents from "@/shared/common-ionic-components";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tab1",
  components: { CurrentWeather, ...commonIonicComponents },
});
</script>
