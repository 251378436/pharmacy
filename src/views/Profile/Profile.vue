<template>
  <div class="profile">
    <h1>This page is profile</h1>
    <button class="btn btn-primary" @click="userLogout()">退出</button>
    <button class="btn btn-primary" @click="decodeToken()">Decode Token</button>
  </div>
</template>

<script src="./Profile.vue.ts"></script>