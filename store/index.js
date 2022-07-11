//setup state
export const state = () => ({
  tournamentData: [
    {
      roundNumber: 0,
      players: [
        { name: "Player1", status: 0 },
        { name: "Player2", status: 0  },
        { name: "Player3", status: 0 },
        { name: "Player4", status: 0  },
        { name: "Player5", status: 0  },
        { name: "Player6", status: 0  },
        { name: "Player7", status: 0  },
        { name: "Player8", status: 0  },
      ],
    },
    {
      roundNumber: 1,
      players: [
        { name: "", status: 0 },
        { name: "", status: 0 },
        { name: "", status: 0 },
        { name: "", status: 0 },

      ],
    },
    {
      roundNumber: 2,
      players: [
        { name: "", status: 0 },
        { name: "", status: 0 },
      ],
    },
    {
      roundNumber: 3,
      players: [
        { name: "", status: 3 }
      ],
    },
  ],
});

export const mutations = {
  insertPlayer(state, {index, matchIndex, nextBracket}){
    // state.tournamentData[index+1].players.push({
    //   "name": state.tournamentData[index]?.players[winIndex]?.name,
    //   "status": 2
    // })
    console.log(nextBracket);
    // console.log(payload.state);
    console.log(index);
    state.tournamentData[index+1].players[nextBracket].name = state.tournamentData[index].players[matchIndex].name;
    state.tournamentData[index+1].players[nextBracket].status = 0;
    state.tournamentData[index].players[matchIndex].status = 2;
    if(matchIndex % 2 === 0){

      state.tournamentData[index].players[matchIndex+1].status = 1;
    }
    else{
      state.tournamentData[index].players[matchIndex-1].status = 1;
    }
  }
  // increment(state) {
  //   state.count++;
  // },
  // setAccount(state, account) {
  //   state.account = account;
  // },
  // setUser(state, user) {
  //   state.user.accessToken = user.accessToken;
  //   state.user.userId = user.userId;
  // },
  // logOut(state) {
  //   state.user.accessToken = null;
  //   state.user.userId = null;
  // }
};
