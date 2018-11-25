<template>
    <div>
        <div v-show="isShowLoader" class="loaderPanel flex-column-h-center-v-center">
            <div class="loader"></div>
        </div>
    </div>
</template>

<script src="./Loader.vue.ts"></script>

<style scoped lang="less">
@import "Loader.vue.less";
</style>