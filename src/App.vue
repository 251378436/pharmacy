<template>
  <div id="app" class="container-fluid">
    <div id="main-content">
      <router-view/>
    </div>
    <footer>
      <MenuBar />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuBar from '@/components/MenuBar/MenuBar.vue';

@Component({
  components: {
    MenuBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
@import "Style.less";
</style>

