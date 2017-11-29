import _ from 'underscore'

export default {
  addPlayer: (state, payload) => {
    let player = state.players.find((p) => p.account === payload.account)

    if (typeof player === 'undefined') {
      state.players.push({
        name: payload.name,
        account: payload.account
      })
    }
  },
  removePlayer: (state, account) => {
    let player = state.players.find(p => p.account === account)

    if (player) {
      state.players.splice(state.players.indexOf(player.account))
    }
  },
  shufflePlayers: (state) => {
    state.result = _.shuffle(state.players)
    state.showPlayers = false
  },
  shuffleAgain: (state) => {
    state.result = _.shuffle(state.result)
  }
}
