import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShowLoader: false
  },
  getters: {
  },
  mutations: {
    addToCart(state, productId) {
        if(typeof(Storage) !== 'undefined') {
            if (localStorage.shoppingCart) {
                var items = JSON.parse(localStorage.getItem("shoppingCart") || '');
                var item = items.find((x: any) => x.productId == productId);
                item ? item.quantity++ : items.push({productId: productId, quantity: 1});
                localStorage.setItem('shoppingCart', JSON.stringify(items));
            } else {
                var items: any = [];
                items[0] = { productId: productId, quantity: 1};
                localStorage.setItem('shoppingCart', JSON.stringify(items));
            }
        } else {
            this._vm.$dialog.alert('Sorry, your browser does not support web storage...', {okText: '继续'});
        }
    },
    addToCartAnimation() {
        this._vm.$dialog.alert('添加成功', {okText: '继续'});
    },
    showLoader(state) {
        state.isShowLoader = true;
    },
    hideLoader(state) {
        state.isShowLoader = false;
    }
  },
  actions: {
    addToCart({ commit }, productId) {
        commit('addToCart', productId);
        commit('addToCartAnimation');
    }
  },
  modules: {
  }
});


