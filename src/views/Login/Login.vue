<template>
    <div id="login-page-content" class="container-fluid flex-column-h-center-v-center text-center" data-ng-init="init()">
        <div>
            <form class="">
                <div class="form-group">
                    <label>手机号码:</label>
                    <input type="text" v-validate="'required|numeric'" data-vv-name="phoneNumber" class="form-control" v-model="phoneNumber" data-vv-as="电话号码">
                    <span v-show="errors.has('phoneNumber')" class="text-danger">{{ errors.first('phoneNumber') }}</span>
                </div>
                <div class="form-group">
                    <label>姓名:</label>
                    <input type="text" class="form-control" v-model="userName" v-validate="'required|truthy'" data-vv-name="userName" data-vv-as="用户名">
                    <span v-show="errors.has('userName')" class="text-danger">{{ errors.first('userName') }}</span>
                </div>
                <button type="button" class="btn btn-primary" @click="userLogin()">登陆</button>
            </form>
        </div>
    </div>
</template>

<script src="./Login.vue.ts"></script>

<style scoped lang="less">
@import "Login.vue.less";
</style>