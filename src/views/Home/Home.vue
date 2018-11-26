<template>
  <div id="home">
    <div id="search">
      <div class="input-group">
        <input type="text" v-model="searchText" class="form-control" placeholder="查找你需要购买的物品">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" v-on:click="getFilteredProductsBySearch" >
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    <div id="content" class="row">
      <div id="navigation" class="col-3">
        <Navigation v-bind:selectedCategoryId="selectedCategoryId" v-on:changeCategory="changeCategory" />
      </div>
      <div id="list" class="col-9">
        <div class="row">
          <div class="card card-special" v-for="product in filteredProducts" v-bind:key="product.id">
            <img class="card-img-top" :src="product.showPhoto ? product.photoUrl : ''" alt="点击显示图片" @click="product.showPhoto = true" style="width:100%">
            <div class="card-body">
              <div class="product-name">
                <span>{{ product.description }}</span>  
              </div>  
              <div class="price-box">
                <p v-bind:class="{ 'regular-deleted-price': product.specialPrice, 'regular-price' : !product.specialPrice }">
                  <span>NZ${{product.regularPrice}}</span>
                </p>
                <p class="special-price" v-if="product.specialPrice">
                  <span>NZ${{product.specialPrice}}</span>
                </p>
              </div>
            </div> 
            <div class="card-footer">
              <button type="button" title="添加到购物车" class="btn btn-cart" v-on:click="addToCart(product.id)">
                <span>添加到购物车</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script src="./Home.vue.ts"></script>

<style scoped lang="less">
@import "Home.vue.less";
</style>