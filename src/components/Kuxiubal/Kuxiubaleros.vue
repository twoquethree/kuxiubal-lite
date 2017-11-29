<template>
<div class="uk-card uk-card-default">
  <div class="uk-card-header">
    <div class="uk-grid-small uk-flex-middle" uk-grid>
      <div class="uk-width-1-2@s">
        <h3 class="uk-card-title uk-margin-remove-bottom">Kuxiubaleros</h3>
        <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">Click on any kuxiubalero to remove from list</time></p>
      </div>
      <div class="uk-width-1-2@s">
        <h3 class="uk-card-title uk-margin-remove-top uk-align-right">0.00</h3>
      </div>
    </div>
  </div>
  <div class="uk-card-body">
    <ul class="uk-list uk-list-small uk-list-divider">
      <li v-for="player in players" :key="player.account" @click="removePlayer(player.account)" style="cursor: pointer;">
        {{ player.name }}
        <br>
        <small class="uk-align-right">{{ player.account }}</small>
      </li>
    </ul>
  </div>
  <div style="cursor: pointer;" @click="shufflePlayers" class="uk-button-danger uk-light uk-text-center uk-card-footer">
    <div class="uk-button uk-button-text">
      PLAY
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      players: [{
          name: 'John Doe',
          account: 123456789
        },
        {
          name: 'Karen Doe',
          account: 101112134
        },
        {
          name: 'Gina Doe',
          account: 151617189
        }
      ]
    }
  },
  methods: {
    removePlayer() {
      console.log('removing player')
    },
    shufflePlayers() {
      console.log('shuffeling player')
    }
  }
}
</script>

<style lang="css">
</style>
