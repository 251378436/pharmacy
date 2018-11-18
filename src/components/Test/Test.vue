<template>
    <div>
        <h1>This is the test3</h1>
        <button v-on:click="test()">Test</button>
        {{moduleASysUser}} <br>
        <counter></counter>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Counter from '@/components/Test/Counter.vue';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'
const moduleA = namespace('moduleA');

@Component({
    components: {
        Counter,
    },
})
export default class Test extends Vue  {
    @Mutation increment: any;
    @Mutation SOME_MUTATION_TEST: any;
    @Action('incrementAction') incrementAction: any;
    @Action('incrementActionAsync') incrementActionAsync: any;
    @Action('actionA') actionA: any;
    @Action('actionB') actionB: any;
    @moduleA.Getter('doubleCount') moduleADoubleCount: any;
    @moduleA.Action('userLoad') moduleAUserLoad: any
    @moduleA.State('sysUser') moduleASysUser: any
    @moduleA.State('count') moduleACount: any

    test() {
        // this.$store.commit('increment')
        // this.$store.commit('increment', {
        //     amount: 10
        // });
        // this.$store.commit({
        //     type: 'increment',
        //     amount: 10
        // });
        //this.increment({amount: 10});
        //this.SOME_MUTATION_TEST(10);
        
        // console.log(this);76767676

        // console.log(this.$store.state.count) // -> 1

        // Vue.set(this.$store.state, 'years', 124);
        // console.log(this.$store.state.years);

        /////////////////////////////////// Actions
        // this.$store.dispatch('incrementAction');
        //this.$store.dispatch('incrementActionAsync', {amount: 3});
        // this.incrementAction();
        //this.incrementActionAsync({amount: 4});
        // this.actionA({amount: 4}).then((data: any)=>{
        //     console.log('success updated' + data);
        // });
        //this.actionB({amount: 4});

        // this.$store.state.moduleA.count++;
        // console.log(this.$store.state.moduleA.count);
        // console.log(this.moduleADoubleCount);
        console.log(this.moduleACount);
        this.moduleAUserLoad({ name: "6", age: 16 });
        console.log(this.moduleACount);
        console.log(this.moduleACount);
    }
}
</script>

