<template>
<div class="uk-card uk-card-default">
  <div class="uk-card-header">
    <div class="uk-grid-small uk-flex-middle" uk-grid>
      <div class="uk-width-expand">
        <h3 class="uk-card-title uk-margin-remove-bottom">Add Kuxiubaleros</h3>
      </div>
    </div>
  </div>
  <div class="uk-card-body">
    <div class="uk-margin-small uk-width-medium">
      <input v-model="player.name" type="text" class="uk-input" placeholder="Kuxiubalero Name">
    </div>
    <div class="uk-margin-small uk-width-medium">
      <input type="number" v-model="player.account" class="uk-input" placeholder="Account">
    </div>
  </div>
  <div style="cursor: pointer;" @click="addPlayer" class="uk-button-primary uk-light uk-text-center uk-card-footer">
    <div class="uk-button uk-button-text">
      ADD
    </div>
  </div>
</div>
</template>

<script>
import {
  mapMutations
} from 'vuex'

export default {
  data() {
    return {
      player: {
        name: '',
        account: ''
      }
    }
  },
  methods: {
    ...mapMutations({
      add: 'addPlayer'
    }),
    addPlayer() {
      this.add(this.player)
      this.player = {
        name: '',
        account: ''
      }
    }
  }
}
</script>

<style lang="css">
</style>
