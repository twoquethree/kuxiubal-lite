<template>
<div uk-grid>
  <div class="uk-width-1-1@s">
    <transition name="slide" mode="out-in">
      <app-game v-if="true"></app-game>
      <app-kuxiubal-result class="uk-width-1-2@m uk-align-center" v-else></app-kuxiubal-result>
    </transition>
  </div>
</div>
</template>

<script>
import KuxiubalResult from './KuxiubalResult.vue'
import Game from './Game.vue'

export default {
  components: {
    appGame: Game,
    appKuxiubalResult: KuxiubalResult
  }
}
</script>
<style scoped>

</style>
