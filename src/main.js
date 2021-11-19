import Vue from 'vue'
import App from './App.vue'
import '@/utils/rem'
import router from '@/router/router';
import './common/common.scss';
import { Toast } from 'vant';
import 'vant/lib/toast/style';
import i18n from './il8n';
Vue.use(Toast);

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
