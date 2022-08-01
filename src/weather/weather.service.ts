import { Geolocation } from "@capacitor/geolocation";
import { ref } from "vue";
import { OneWeather } from "./one-weather.model";

const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly&units=metric&appid=${process.env.VUE_APP_API_KEY}`;

const weather = ref<OneWeather>();

const getWeather = async () => {
  const { coords } = await Geolocation.getCurrentPosition();
  const response = await fetch(
    `${weatherUrl}&lat=${coords.latitude}&lon=${coords.longitude}`
  );
  weather.value = await response.json();
  return weather;
};

const formatTemperature = (value: number, format: "F" | "C") =>
  `${Math.round(value)}° ${format}`;

const getWeatherImageUrl = (iconName: string, size: "2x" | "4x") => {
  return `https://openweathermap.org/img/wn/${iconName}@${size}.png`;
};

export function useWeather() {
  return {
    weather,
    getWeather,
    formatTemperature,
    getWeatherImageUrl,
  };
}
