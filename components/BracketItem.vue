<template>
    <div>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <!-- $store.state.tournamentData[index]?.players[matchIndex]?.status <= 0 ? 'error' : 'success' -->
          <v-btn
          v-bind="attrs"
          v-on="on"
          ref="btn"
          :disabled="disabled"
          :color="soldo($store.state.tournamentData[index]?.players[matchIndex]?.status)"
          @click="insert(index, matchIndex, nextBracket)"
          block small>
          <!-- <v-icon v-if="index <= 0">mdi-account</v-icon>{{index}} {{matchIndex}} {{rounds[index]}} {{matchIndex % 2 ? matchIndex / 2 - 0.5 : matchIndex / 2}}  -->
          <!-- <v-icon>mdi-crown-circle</v-icon> -->
          <v-icon>mdi-account</v-icon>
          {{namez}}
          </v-btn>

        </template>
        <span>{{matchIndex}}</span>
      </v-tooltip>
    </div>
</template>
<!-- clickOnButton(); playParty($refs.btn.$el) -->
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
      nextBracket: -1,
      status: true,
      selectedcolor: 'blue',
      disabled: false,
      color:{
        color1: "success",
        color2: "error"
      },

    }
  },
  computed: {
    namez(){
      return this.$store.state.tournamentData[this.index]?.players[this.matchIndex]?.name;
    }
  },
  created(){
    this.nextBracket = this.matchIndex % 2 ? this.matchIndex / 2 - 0.5 : this.matchIndex / 2;
    // this.name = this.$store.state.tournamentData[0]?.players[this.matchIndex]?.name;

  },
  methods: {
    insert(index, matchIndex, nextBracket){
      if(index < this.$store.state.tournamentData.length-1){
        this.$store.commit('insertPlayer',{index, matchIndex, nextBracket});
      }
      else{
        // this.$store.state.tournamentData[this.$store.state.tournamentData.length-1].players[0].status = 3;
      }
      //  this.$nextTick(() => {

      // });
      // $store.state.tournamentData[index]?.players[matchIndex]?.name
    },
    soldo(choice){
      switch(choice){
        case 0:
          return "blue";
          break;
        case 1:
          return "error";
          break;
        case 2:
          return "success";
          break;
        case 3:
          return "yellow";
          break;
        default:
          break;
      }
    },
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
