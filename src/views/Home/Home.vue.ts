import { Component, Vue } from 'vue-property-decorator';
import $ from "jquery";
import Navigation from '@/components/Navigation/Navigation.vue';
import {Product} from '@/Models/Product';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class';

@Component({
  components: {
    Navigation,
  },
})
export default class Home extends Vue {
  @Action addToCart: any;

  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategoryId: string = 'hot';
  searchText: string = '';

  getFilteredProductsById() {
    if(this.selectedCategoryId == 'hot') {
      this.filteredProducts = this.products.filter(p => p.isHotProduct);
    } else if (this.selectedCategoryId == 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(p => p.categoryId == this.selectedCategoryId)
    }
  }

  getFilteredProductsBySearch() {
    if(this.searchText) {
      this.selectedCategoryId = '';
      this.filteredProducts = this.products;
      this.searchText = this.searchText.trim();
      var criterias = this.searchText.split(' ');
      criterias.forEach(criteria => {
        this.filteredProducts = this.filteredProducts.filter(p => p.description.toLowerCase().includes(criteria.toLowerCase()));
      });
    } 
  }

  created() {
    this.getProducts();
    this.getFilteredProductsById();
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

  changeCategory(id: any = null) {
    this.selectedCategoryId = id;
    this.getFilteredProductsById();
  }
}