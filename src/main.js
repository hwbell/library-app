import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import VModal from '../node_modules/vue-js-modal';
import vueSmoothScroll from 'vue2-smooth-scroll';
import FineMq from "fine-mq";
import vClickOutside from 'v-click-outside'

Vue.use(vClickOutside)
Vue.use(FineMq);
Vue.use(vueSmoothScroll);
Vue.use(BootstrapVue);
Vue.use(VModal);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
