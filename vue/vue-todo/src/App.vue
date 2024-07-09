<template>
  <nav>
    <span @click="changeTab(1)">基础知识</span>|
    <span @click="changeTab(2)">购物车</span>|
    <span @click="changeTab(3)">待办事项</span>
  </nav>

<Base v-if=" state.index === 1"/>
<shopping v-if=" state.index === 2"/>
<todo v-if=" state.index === 3"/>
</template>

<script setup>
import Base from './compunents/base.vue'
import shopping from './compunents/shopping.vue'
import todo from './compunents/todo.vue'

import { reactive } from 'vue'
let state = reactive({
  index:1
})
const changeTab = (i)=>{
  state.index = i
}
</script>

<style lang="css" >
*{
  text-align: center;
}
</style>