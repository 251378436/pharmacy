<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4 text-center" v-on:click="changePage('home')" v-bind:class="{ 'active': selectedPage == 'home' }">
          <i class="fas fa-home"></i>
        </div>
        <div class="col-4 text-center" v-on:click="changePage('shoppingcart')" v-bind:class="{ 'active': selectedPage == 'shoppingcart' }">
          <i class="fas fa-cart-arrow-down"></i>
        </div>
        <div class="col-4 text-center" v-on:click="changePage('profile')" v-bind:class="{ 'active': selectedPage == 'profile' }">
          <i class="fas fa-user-circle"></i>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MenuBar extends Vue {
  selectedPage: string = 'home';

  changePage(item: string) {
    this.selectedPage = item;
    this.$router.push('/' + item);
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "MenuBar.less";
</style>
