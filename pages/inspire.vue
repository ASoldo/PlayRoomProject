<template>
  <v-row align="center" justify="center">
    <!-- <v-col cols="12" md="12" sm="12" xl="12" class="text-center"> -->
      <v-card>
        <Chart></Chart>
      </v-card>

    <!-- </v-col> -->
  </v-row>
</template>

<script>
import Chart from '../components/Chart.vue';
export default {
    name: "InspirePage",
    components: { Chart, }
}
</script>
