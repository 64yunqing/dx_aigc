<template>
  <div class="app">
    <virtualList :listData="data" />
  </div>
</template>

<script setup>
import virtualList from './components/virtualList.vue'

const data = []

for (let i = 0; i < 1000; i++) {
  data.push({id: i, value: i})
}
</script>

<style lang="css" scoped>
.app{
  width: 300px;
  height: 400px;
  border: 1px solid #000;
}
</style>