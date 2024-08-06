<template>
<van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="gem-o" to="/collection">立即订购</van-tabbar-item>
    <van-tabbar-item icon="search" to="/discount">智驾AI</van-tabbar-item>
    <van-tabbar-item icon="service-o" to="/trip">售后服务</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/account">预约试驾</van-tabbar-item>
</van-tabbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref<number>(0)
</script>

<style scoped>

</style>