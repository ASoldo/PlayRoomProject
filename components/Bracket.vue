<script>
import BracketItem from './BracketItem.vue'
const defaultRounds = [256, 128, 64, 32, 16, 8, 4, 2, 1]

export default {
    name: "bracket",
    props: {
        bracketSize: {
            type: Number,
            default: 8
        },
        matchStyle: {
            type: Object,
            default: () => ({
                width: "100%",
                height: "30px",
                position: "relative"
            })
        },
        usersz: {
            type: Object,
            default: () => ({
                users: []
            })
        },
        roundx: {
            type: Number,
            default: 0
        }
    },
    computed: {
        rounds() {
            return defaultRounds.filter(rounds => rounds <= this.bracketSize);
        }
    },
    data() {
        return {
            roundZ: 0,
            users: [
                { username: "Soldo" },
                { username: "Vili" },
            ]
        };
    },
    methods: {
        log(matchIndex) {
            console.log("clicked on" + matchIndex);
        }
    },
    components: { BracketItem }
}
</script>

<template>
  <div class="tournament-brackets">
    <div class="bracket">
      <template v-for="(round, index) in rounds">
        <div class="round" :key="index" :class="['round-' + round]">
          <template v-for="(match, matchIndex) in round">
            <div class="match" :key="matchIndex">
              <div class="match__content" :style="matchStyle">
                <!-- <p v-if="index === 0">{{users[matchIndex].username}}</p>
                        <p v-if="index === 1">{{users[matchIndex].username}}</p> -->
                <!-- <p v-for="(item, key) in users" :key="key" v-if="index === key && key === roundx || round > index">
                  {{ users[matchIndex].username }}</p> -->
                <!-- <v-btn @click="log(index)" block small color="success">{{ users[matchIndex]?.username }} {{index}} {{matchIndex}}</v-btn> -->
                <BracketItem :index="index" :matchIndex="matchIndex" :rounds="rounds[0]"></BracketItem>
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<style>

.tournament-brackets{
  overflow-x: scroll;
  overflow-y: scroll;
  scrollbar-width: 10px;
}
*,
*::after,
*::before {
  box-sizing: border-box;
}

.bracket {
  display: flex;

}

.round {
  display: flex;
  flex-grow: 1;
  flex-direction: column;

}

.round:hover{
  background-color: rgba(0, 183, 255, 0.445);
}

.round:first-child .match::before {
  display: none;
}

.round:first-child .match__content::before {
  display: none;
}

.round:last-child .match::after {
  display: none;
}

.match {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
  padding: 6px 0;
  flex-grow: 1;
  position: relative;
}

.match::before {
  content: "";
  display: block;
  min-height: 30px;
  border-left: 2px solid lime;
  position: absolute;
  left: -10px;
  top: 50%;
  margin-top: -15px;
  margin-left: -2px;
}

.match:nth-child(odd)::after {
  content: "";
  display: block;
  border: 2px solid transparent;
  border-top-color: lime;
  border-right-color: lime;
  height: 50%;
  position: absolute;
  right: -10px;
  width: 10px;
  top: 50%;
  border-top-right-radius: 5px;
}

.match:nth-child(even)::after {
  content: "";
  display: block;
  border: 2px solid transparent;
  border-bottom-color: lime;
  border-right-color: lime;
  height: 50%;
  position: absolute;
  right: -10px;
  width: 10px;
  bottom: 50%;
  border-bottom-right-radius: 5px;
}

.match__content::before {
  content: "";
  display: block;
  width: 10px;
  border-bottom: 2px solid lime;
  margin-left: -2px;
  position: absolute;
  top: 50%;
  left: -10px;
}
/* .match__content:hover {
  background-color: rgba(43, 255, 0, 0.479);
} */
</style>
