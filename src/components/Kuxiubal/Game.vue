<template>
<div uk-grid>
  <div class="uk-width-1-1@s">
    <app-kuxiubal-amount></app-kuxiubal-amount>
  </div>
  <div class="uk-width-1-2@s">
    <app-kuxiubalero-form></app-kuxiubalero-form>
  </div>
  <div class="uk-width-1-2@s">
    <app-kuxiubaleros></app-kuxiubaleros>
  </div>
</div>
</template>

<script>
import KuxiubaleroForm from './KuxiubaleroForm.vue'
import Kuxiubaleros from './Kuxiubaleros.vue'
import KuxiubalAmount from './KuxiubalAmount.vue'

export default {
  components: {
    appKuxiubalAmount: KuxiubalAmount,
    appKuxiubaleroForm: KuxiubaleroForm,
    appKuxiubaleros: Kuxiubaleros
  }
}
</script>

<style lang="css">
</style>
