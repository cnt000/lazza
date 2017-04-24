export const defaultState = {
  session: '',
  gameType: ['battle', 'co-op'],
  battleRounds: [
    { 
      name: "Round 1",
      voted: false
    },
    { 
      name: "Round 2",
      voted: false
    },
    { 
      name: "Round 3",
      voted: false
    },
    { 
      name: "Round 4",
      voted: false
    },
    { 
      name: "Round 5",
      voted: false
    }
  ],
  fields: [],
  votes: [],
  teams: [{
    name: "I ragazzi",
    players: [
      "Andrea",
      "Dario",
      "Davide",
      "Jakub",
      "Lorenzo"
    ]
  },
  {
    name: "I supepro",
    players: [
      "Luca",
      "Marco",
      "Riccardo",
      "Silvina"
    ]
  },]
}
