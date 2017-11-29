<template>
  <div>
    <app-navigation></app-navigation>
    <div class="uk-container">
      <app-kuxiubal></app-kuxiubal>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Kuxiubal from './components/Kuxiubal/Kuxiubal.vue'

export default {
  components: {
    appNavigation: Navigation,
    appKuxiubal: Kuxiubal
  }
}
</script>
