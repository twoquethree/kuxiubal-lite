<template>
<div class="uk-card uk-card-default">
  <div class="uk-card-header">
    <div class="uk-grid-small uk-flex-middle" uk-grid>
      <div class="uk-width-expand">
        <h3 class="uk-card-title uk-margin-remove-bottom">Result</h3>
      </div>
    </div>
  </div>
  <div class="uk-card-body">
    <ul class="uk-list uk-list-small uk-list-divider">
      <li v-for="player in gameResult" :key="player.account">
        {{ player.name }}
        <br>
        <small class="uk-align-right">{{ player.account }}</small>
      </li>
    </ul>
  </div>
  <div style="cursor: pointer;" class="uk-card-footer">
    <div class="uk-grid-small uk-child-width-1-2@s" uk-grid>
      <div>
        <button @click="exportResults" class="uk-button uk-button-secondary">Export Results</button>
      </div>
      <div>
        <select class="uk-select uk-width-small">
             <option>PDF</option>
             <option>Text File</option>
         </select>
      </div>
      <div>
        <button @click="goBack" class="uk-button uk-button-danger">Go Back</button>
      </div>
      <div>
        <button @click="shuffleAgain" class="uk-button uk-button-primary">Shuffle Again</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations([
      'shuffleAgain'
    ]),
    goBack() {
      this.$store.state.showPlayers = !this.$store.state.showPlayers
    },
    exportResults() {
      console.log('exporting result')
    }
  },
  computed:{
    gameResult(){
      return this.$store.state.result
    }
  }
}
</script>

<style lang="css">
</style>
