import { Component, Vue } from 'vue-property-decorator';
import {Product} from '@/Models/Product';
import { ShoppingCartItem } from '@/Models/ShoppingCartItem';
import _ from 'underscore';

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
    this.updateShoppingCart();
  }

  updateShoppingCart() {
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
        description: 'Goose Kiwi Go @ease Capsules 5 (Single Pack of 5 doses) p1',
        regularPrice: 9.99,
        specialPrice: 5.66,
        isHotProduct: true,
        categoryId: 'p1',
        photo: 'pic1'
    }))
    this.products.push(new Product({
      id: '2549070',
      description: 'Goose Kiwi Go @ease Capsules 5 (Single Pack of 5 doses) p2',
      regularPrice: 14.99,
      isHotProduct: true,
      categoryId: 'p2',
      photo: 'pic1'
  }))
  this.products.push(new Product({
    id: '2549071',
    description: 'Goose Kiwi Go @ease Capsules 5 (Single Pack of 5 doses) p3',
    regularPrice: 9.99,
    specialPrice: 5.66,
    categoryId: 'p3',
    photo: 'pic1'
  }))
  this.products.push(new Product({
    id: '2549072',
    description: 'Goose Kiwi Go @ease Capsules 5 (Single Pack of 5 doses) p4',
    regularPrice: 9.99,
    specialPrice: 5.66,
    categoryId: 'p4',
    photo: 'pic1'
  }))
  this.products.push(new Product({
    id: '2549073',
    description: 'Goose Kiwi Go @ease Capsules 5 (Single Pack of 5 doses) p5',
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
      this.shoppingCartList.push(new ShoppingCartItem(item));
    });
  }

  updateDataInLocalStorage() {
    if(typeof(Storage) !== 'undefined') {
        localStorage.setItem('shoppingCart', JSON.stringify(this.localStorage));
    } else {
        alert('Sorry, your browser does not support web storage...');
    }
  }

  increaseQuantity(productId: string) {
    var item = this.localStorage.find(x => x.productId == productId);
    item.quantity++;
    this.updateDataInLocalStorage();
    this.updateShoppingCart();
  }

  decreaseQuantity(productId: string) {
    var item = this.localStorage.find(x => x.productId == productId);
    if((item.quantity - 1)) {
      item.quantity--;
      this.updateDataInLocalStorage();
      this.updateShoppingCart();
    } else {
      this.deleteItem(productId);
    }
  }

  deleteItem(productId: string) {
    var message = "你确定要删除这条记录吗?";
 
    var options = {
        html: false, // set to true if your message contains HTML tags. eg: "Delete <b>Foo</b> ?"
        loader: false, // set to true if you want the dailog to show a loader after click on "proceed"
        reverse: false, // switch the button positions (left to right, and vise versa)
        okText: '确定',
        cancelText: '取消',
        animation: 'zoom', // Available: "zoom", "bounce", "fade"
        type: 'basic', // coming soon: 'soft', 'hard'
        verification: 'continue', // for hard confirm, user will be prompted to type this to enable the proceed button
        verificationHelp: 'Type "[+:verification]" below to confirm', // Verification help text. [+:verification] will be matched with 'options.verification' (i.e 'Type "continue" below to confirm')
        clicksCount: 3, // for soft confirm, user will be asked to click on "proceed" btn 3 times before actually proceeding
        backdropClose: false, // set to true to close the dialog when clicking outside of the dialog window, i.e. click landing on the mask 
        customClass: '' // Custom class to be injected into the parent node for the current dialog instance
    };

    this.$dialog.confirm(message, options)
      .then(() => {
        var item = this.localStorage.find( (x: any) => x.productId == productId);
        var index = this.localStorage.indexOf(item);
        this.localStorage.splice(index, 1);
        this.updateDataInLocalStorage();
        this.updateShoppingCart();
      })
      .catch(() => {
      });
  }
}