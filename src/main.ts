import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VuejsDialog from "vuejs-dialog";
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import './filters';

Vue.config.productionTip = false;

Vue.use(VuejsDialog);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
