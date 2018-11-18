<template>
  <div class="shoppingcart">
    <h1>购物车</h1>
    <div class="container">
      <div class="row font-weight-bold py-2">
          <div class="col-6">
              商品名称
          </div>
          <div class="col-2">
              单价
          </div>
          <div class="col-2">
              数量
          </div>
          <div class="col-2">
              小计
          </div>
      </div>
      <div class="row py-2" v-for="item in shoppingCartList" v-bind:key="item.id">
          <div class="col-6">
              {{item.description}}
          </div>
          <div class="col-2">
              {{item.currentPrice}}
          </div>
          <div class="col-2">
              <i class="fas fa-minus" @click="decreaseQuantity(item.id)"></i> {{item.quantity}} <i class="fas fa-plus" @click="increaseQuantity(item.id)"></i>
          </div>
          <div class="col-2">
              ${{item.calculatedAmount | numberTwoDecimalPlaces}} NZD <i class="fas fa-trash-alt" @click="deleteItem(item.id)"></i>
          </div>
      </div>
    </div>
</div>

</template>

<script src="./ShoppingCart.vue.ts"></script>
<style scoped lang="less">
@import "ShoppingCart.vue.less";
</style>