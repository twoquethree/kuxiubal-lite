import Vue from 'vue'
import App from './App.vue'

// UIKit
import '../node_modules/uikit/src/less/uikit.less'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);


new Vue({
  el: '#app',
  render: h => h(App)
})
