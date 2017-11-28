<template>
  <div uk-grid>
    <div class="uk-width-1-2@s">
      <div uk-grid>
        <div class="uk-width-1-1@s">
          <app-kuxiubalero-form></app-kuxiubalero-form>
        </div>
        <div class="uk-width-1-1@s">
          <app-kuxiubaleros></app-kuxiubaleros>
        </div>
      </div>
    </div>

    <div class="uk-width-1-2@s">
      <app-kuxiubal-result></app-kuxiubal-result>
    </div>
  </div>
</template>

<script>
import KuxiubaleroForm from './KuxiubaleroForm.vue'
import Kuxiubaleros from './Kuxiubaleros.vue'
import KuxiubalResult from './KuxiubalResult.vue'

export default {
  components: {
    appKuxiubaleroForm: KuxiubaleroForm,
    appKuxiubaleros: Kuxiubaleros,
    appKuxiubalResult: KuxiubalResult
  }
}
</script>

<style lang="css">
</style>
