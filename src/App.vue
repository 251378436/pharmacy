<template>
  <div id="app" class="container-fluid">
    <div id="main-content">
      <router-view/>
    </div>
    <footer>
      <MenuBar />
    </footer>
    <Loader />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuBar from '@/components/MenuBar/MenuBar.vue';
import Loader from '@/components/Loader/Loader.vue';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class';

@Component({
  components: {
    MenuBar,
    Loader
  },
})
export default class App extends Vue {
  
}
</script>

<style lang="less">
@import "Style.less";
</style>

