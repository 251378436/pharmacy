import { Component, Vue } from 'vue-property-decorator';
import {Product} from '@/Models/Product';
import { ShoppingCartItem } from '@/Models/ShoppingCartItem';


@Component({
  components: {
  },
})
export default class ShoppingCart extends Vue {
  products: Product[] = [];
  localStorage: any[] = [];
  shoppingCartList: ShoppingCartItem[] = [];

  created() {
    this.getProducts();
    this.getDataFromLocalStorage();
    this.getShoppingCartList();
  }

  getDataFromLocalStorage() {
    if(typeof(Storage) !== 'undefined') {
      if (localStorage.shoppingCart) {
          var items = JSON.parse(localStorage.getItem("shoppingCart") || '');
          this.localStorage = items;
      }
    } else {
        alert('Sorry, your browser does not support web storage...');
    }
  }

  getProducts() {
    this.products.push(new Product({
        id: '2549069',
        description: 'Go Healthy Go @ease Capsules 5 (Single Pack of 5 doses) p1',
        regularPrice: 9.99,
        specialPrice: 5.66,
        isHotProduct: true,
        categoryId: 'p1',
        photo: 'pic1'
    }))
    this.products.push(new Product({
      id: '2549070',
      description: 'Go Healthy Go @ease Capsules 5 (Single Pack of 5 doses) p2',
      regularPrice: 14.99,
      isHotProduct: true,
      categoryId: 'p2',
      photo: 'pic1'
  }))
  this.products.push(new Product({
    id: '2549071',
    description: 'Go Healthy Go @ease Capsules 5 (Single Pack of 5 doses) p3',
    regularPrice: 9.99,
    specialPrice: 5.66,
    categoryId: 'p3',
    photo: 'pic1'
  }))
  this.products.push(new Product({
    id: '2549072',
    description: 'Go Healthy Go @ease Capsules 5 (Single Pack of 5 doses) p4',
    regularPrice: 9.99,
    specialPrice: 5.66,
    categoryId: 'p4',
    photo: 'pic1'
  }))
  this.products.push(new Product({
    id: '2549073',
    description: 'Go Healthy Go @ease Capsules 5 (Single Pack of 5 doses) p5',
    regularPrice: 9.99,
    isHotProduct: true,
    categoryId: 'p5',
    photo: 'pic1'
  }))
  }

  getShoppingCartList() {
    this.shoppingCartList = [];
    this.localStorage.forEach(x => {
      var item: any = this.products.find(p => p.id == x.productId);
      item.quantity = x.quantity;
      console.log(item);
      this.shoppingCartList.push(new ShoppingCartItem(item));
    });
    console.log(this.shoppingCartList);
  }
}