<template>
  <v-app style="background-color: #f3f6fa">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="text-h5 font-weight-bold">
        Weather Data Application
      </div>

      <v-spacer></v-spacer>

      
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
