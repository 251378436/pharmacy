<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="category in categories" 
            v-bind:class="{ 'active': selectedCategoryId == category.id }"
            v-on:click="changeSelectedCategoryId(category.id)"
            v-bind:key="category.id">
                {{ category.displayName }}
            </li>
        </ul>
    </div>
</template>

<script src="./Navigation.vue.ts"></script>

<style scoped lang="less">
@import "Navigation.vue.less";
</style>