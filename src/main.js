import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Card,GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn } from 'vant'

Vue
.use(Card)
.use(GoodsAction)
.use(GoodsActionBigBtn)
.use(GoodsActionMiniBtn)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
