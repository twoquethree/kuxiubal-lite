<template>
  <div class="uk-card uk-card-default">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-expand">
          <h3 class="uk-card-title uk-margin-remove-bottom">Kuxiubaleros</h3>
          <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">Click on any kuxiubalero to remove from list</time></p>
        </div>
      </div>
    </div>
    <div class="uk-card-body">
      <ul class="uk-list uk-list-small uk-list-divider">
        <li>
          John Doe
          <br>
          <small class="uk-align-right">65416854612</small>
        </li>
        <li>
          Mary Doe
          <br>
          <small class="uk-align-right">65416854612</small>
        </li>
        <li>
          Joe Doe
          <br>
          <small class="uk-align-right">65416854612</small>
        </li>
      </ul>
    </div>
    <div style="cursor: pointer;" class="uk-card-footer">
      <div class="uk-grid-small uk-child-width-1-2@s" uk-grid>
        <div>
          <button class="uk-button uk-button-secondary">Export Results</button>
        </div>
        <div>
          <select class="uk-select uk-width-small">
             <option>PDF</option>
             <option>Text File</option>
         </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
