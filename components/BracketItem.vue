<template>
    <div>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
          v-bind="attrs"
          v-on="on"
          ref="btn"
          :disabled="disabled"
          :color="selectedcolor"
          @click="clickOnButton(); playParty($refs.btn.$el)"
          block small> <v-icon>mdi-account</v-icon>{{index}} {{matchIndex}} {{rounds[index]}} {{matchIndex % 2 ? matchIndex / 2 - 0.5 : matchIndex / 2}} <v-icon>mdi-crown-circle</v-icon></v-btn>
        </template>
        <span>{{matchIndex}}</span>
      </v-tooltip>
    </div>
</template>
<!-- "log(index, matchIndex, matchIndex % 2 ? matchIndex / 2 - 0.5 : matchIndex / 2)" -->
<script>
  export default {
  name: "BracketItem",
  props: {
    index: {
      type: Number,
      default: 0
    },
    matchIndex: {
      type: Number,
      default: 0
    },
    rounds: {
      type: Number,
      default: 0
    }
  },
  data(){
    return {
      status: true,
      selectedcolor: 'blue',
      disabled: false,
      color:{
        color1: "success",
        color2: "error"
      }
    }
  },
  methods: {
    log(a,b,c){
      console.log(`i:${a} mi:${b} ci:${c}`)
    },
    clickOnButton(){
      if(this.status){
        this.selectedcolor = this.color.color1;
      }
      else{
        this.selectedcolor = this.color.color2;
      }
        this.status = !this.status;
    },
    playParty(elem) {
      if(!this.status){
        party.sparkles(elem, {
          count: party.variation.range(35, 60),
          size: party.variation.range(0.6, 1.4),
          speed: party.variation.range(50, 300),
        });
        // console.log(this.$refs.party.$el);
      }
      else{
        //  party.confetti(elem, {
        //   count: party.variation.range(10, 35),
        // });
      }
    },
  }
}
</script>

<style>

</style>
