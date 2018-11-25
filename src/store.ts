import Vue from 'vue';
import Vuex from 'vuex';
import { SOME_MUTATION } from './mutation-types';
import { moduleA } from '@/moduleA';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    name: 'long',
    age: 24,
    todos: [
        {id: 1, text: '...', done: true },
        {id: 2, text: '...', done: false },
    ],
    isShowLoader: false
  },
  getters: {
      doneTodos: state => {
          
          return state.todos.filter(todo => todo.done)
      },
      getTodoById: (state) => (id: any) => {
          return state.todos.find(todo => todo.id === id)
      },
      getValue: (state) => {
          return "hello world!!!!!!!!!!!!!!";
      }
  },
  mutations: {
    increment1(state) {
        state.count++;
    },
    increment (state, payload) {
      state.count += payload.amount;
    },
    [SOME_MUTATION](state) {
        state.age += 10;
    },
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
            alert('Sorry, your browser does not support web storage...');
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
    incrementAction ({ commit }) {
        commit('increment1')
    },
    incrementActionAsync({ commit }, payload) {
        setTimeout(() => {
            commit('increment', payload);
        }, 1000);
    },
    actionA({ commit }, x) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment', x);
                var k= 1000;
                resolve(k);
            }, 1000);
        })
    },
    actionB({ dispatch, commit }, x) {
       return dispatch('actionA', x).then((data: any) => {
            commit('increment', {amount:data});
       });
    },
    addToCart({ commit }, productId) {
        commit('addToCart', productId);
        commit('addToCartAnimation');
    }
  },
  modules: {
      moduleA
  }
});


