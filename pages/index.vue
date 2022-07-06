<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <v-row align="center" justify="space-around" style="padding: 30px;">
        <v-btn v-for="(item, index) in 4" :key="index" no-gutters>{{index !== 4 ? `${++index} /4` : ""}}</v-btn>
      </v-row>
      <v-card>
        <Bracket :bracketSize="8" :roundx="round"></Bracket>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Bracket from '../components/Bracket.vue';
export default {
    name: "IndexPage",
    components: { Bracket },
    data(){
      return{
        round: 0
      }
    }
}
</script>
