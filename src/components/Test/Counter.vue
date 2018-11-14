<template>
    <div>
        {{ count }} {{ name }} {{ age }} {{ stameName }} <br>
        {{ years }} years <br>
        {{ doneTodos }} <br>
        {{ getTodoById(2) }} <br>
        {{ getValue }}
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { State, Getter } from 'vuex-class';

@Component({
    components: {
        
    },
})
export default class Counter extends Vue  {
    @State('name') stameName: any
    @State age: any
    @Getter doneTodos: any
    @Getter getTodoById: any
    @Getter getValue: any
    @State years: any

    name: string = 'hwllo bo hello bobobo';
    
    //
    //...mapState(['name', 'age']);

    get count() {
        return this.$store.state.count;
    }


}
</script>
