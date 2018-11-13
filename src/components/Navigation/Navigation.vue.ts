import { Component, Vue, Emit, Prop } from 'vue-property-decorator';
import $ from "jquery";
import {Category} from '@/Models/Category';

@Component({
  components: {
  },
})
export default class Navigation extends Vue {
  categories: Category[] = [];

  @Prop({ default: 'hot' }) selectedCategoryId: string

  created() {
    this.getCategories();
  }

  getCategories() {
    this.categories.push(new Category({id : 'hot', displayName : '热门商品'}));
    this.categories.push(new Category({id : 'all', displayName : '全部'}));
    this.categories.push(new Category({id : 'p1', displayName : '美容养颜'}));
    this.categories.push(new Category({id : 'p2', displayName : '瘦身减肥'}));
    this.categories.push(new Category({id : 'p3', displayName : '男性保健'}));
    this.categories.push(new Category({id : 'p4', displayName : '女性保健'}));
    this.categories.push(new Category({id : 'p5', displayName : '儿童专区'}));
    this.categories.push(new Category({id : 'p6', displayName : '老人专区'}));
  }

  changeSelectedCategoryId(id: any) {
    //this.selectedCategoryId = id;
    this.$emit('changeCategory', id);
  }

}