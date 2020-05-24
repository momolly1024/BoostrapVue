import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './style/style.styl'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { faThumbsUp } from '@fortawesome/free-brands-svg-icons'
// // import { NavbarPlugin } from 'bootstrap-vue'
// library.add(faSearch, faThumbsUp)
// Vue.component('font-awesome', FontAwesomeIcon)
// Vue.use(NavbarPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
