<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Forecast</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Forecast</ion-title>
        </ion-toolbar>
      </ion-header>

      <forecast></forecast>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import Forecast from "@/weather/forecastWeather.vue";
import commonIonicComponents from "@/shared/common-ionic-components";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Tab2",
  components: { Forecast, ...commonIonicComponents },
});
</script>
