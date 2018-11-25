import { Component, Vue } from 'vue-property-decorator';
import {
    State,
    Getter,
    Action,
    Mutation,
    namespace
  } from 'vuex-class';

@Component({
  components: {
  },
})
export default class Loader extends Vue {
    @State isShowLoader: any;
}