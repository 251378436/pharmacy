import Vue from 'vue';
import VeeValidate from 'vee-validate';
import cn from 'vee-validate/dist/locale/zh_CN';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VuejsDialog from "vuejs-dialog";
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import './filters';
import { UserService } from '@/Services/UserService';

Vue.config.productionTip = false;

Vue.use(VuejsDialog);

Vue.use(VeeValidate, {
  locale: 'cn',
  dictionary: {
    cn: cn
  }
});


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requireAuth)) {
      if(UserService.IsLogin()) {
        next();
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
