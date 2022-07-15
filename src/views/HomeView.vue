<template>
  <v-container>
    <v-card outlined>
      <v-card-text>
        <div class="d-flex flex-wrap align-center justify-space-between">
          <div class="ma-2" style="width: 400px">
            <v-autocomplete
              item-text="name"
              item-value="coord"
              :items="CityList"
              label="City"
              hide-details
              placeholder="Select a city"
              v-model="selected_city"
              @input="getCurrentWeather"
              outlined
            >
            </v-autocomplete>
          </div>

          <div class="ma-2" v-if="weatherData">
            <h1 class="text-right text-h3">{{ weatherData.name }}</h1>
            <div class="d-flex align-center justify-end mt-2">
              <v-icon class="mx-2" color="primary" >mdi-weather-partly-cloudy</v-icon>
              <span
                class="font-weight-bold text-h6"
                v-if="weatherData.weather && weatherData.weather[0]"
                >{{ weatherData.weather[0].main }}</span
              >
            </div>

            <div class="d-flex flex-row align-center justify-end my-3">
              <span class="mr-2" v-if="weatherData && weatherData.coord">
                Longitude: {{ weatherData.coord.lon || "-" }}
              </span>
              <span class="ml-2">
                Latitude: {{ weatherData.coord.lat || "-" }}
              </span>
            </div>
          </div>
        </div>

        <div class="d-flex align-center flex-wrap justify-center my-10">
          <div
            v-for="(data, index) in mainData"
            :key="index"
            class="d-flex flex-row align-center jutsify-center"
          >
            <table class="data-box">
              <tr>
                <td class="pa-5">
                  <h3 class="text-capitalize">{{ parseText(data[0]) }}</h3>
                  <span class="text-h4 font-weight-bold">
                    {{ data[1] }}
                    <span>{{ renderSymbol(data[0]) }}</span>
                  </span>
                </td>
              </tr>
            </table>
          </div>
        </div>

      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import CityData from "@/Data/current.city.list.json";
export default {
  name: "Home-page",
  data() {
    return {
      selected_city: null,
      weatherData: null,
      mainData: [],
    };
  },
  computed: {
    /* filtering for only Canadian cities */
    CityList() {
      try {
        if (CityData) {
          return CityData.filter((el) => el.country === "CA");
        }
      } catch (error) {
        alert(`Getting Error on fetching City Data. ${error}`);
      }
    },
  },
  methods: {
    /* determines which units to display once city is selected */
    renderSymbol(text) {
      if (text) {
        if (text.includes("temp")) return '°C';
        if (text.includes("feels")) return '°C';
        if (text.includes("pressure")) return 'hPa';
        if (text.includes("humidity")) return '%';
        if (text.includes("level")) return 'm';
      }
      return '';
    },
    parseText(text) {
      return text.replace("_", " ");
    },
    /* Aquire current weather data for selected city */
    getCurrentWeather(val) {
      if(val && this.axios){
        this.axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${val.lat}&lon=${val.lon}&units=${'metric'}&appid=${this.$API_KEY}`
          )
          .then((response) => {
            this.weatherData = response.data;
            this.mainData = Object.entries(this.weatherData.main);
          });
      }
    },
  },
  mounted() {},
};
</script>
<style>
table,
th,
td {
  border: 1px solid lightgray;
}
</style>
