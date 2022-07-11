<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <v-card>
        <v-stepper alt-labels>
          <v-stepper-header>
            <v-stepper-step step="1"> 1/4 </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="2"> 2/4 </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3"> 3/4 </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step step="4"> Finale </v-stepper-step>
          </v-stepper-header>
        </v-stepper>
        <v-progress-linear
          buffer-value="50"
          stream
          color="blue lighten-1"
        ></v-progress-linear>
        <Bracket :bracketSize="8" :roundx="round"></Bracket>
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in 4" :key="i">
            <v-expansion-panel-header>
              <span class="text-center">
                Soldo
              </span>
              <span class="text-center">
                Vs
              </span>
              <span class="text-center">
                Andrija
              </span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Bracket from "../components/Bracket.vue";
export default {
  name: "IndexPage",
  components: { Bracket },
  data() {
    return {
      round: 0,
    };
  },
};
</script>
