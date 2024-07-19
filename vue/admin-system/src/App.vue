<template>
  <div>
    <router-view/>
  </div>
</template>

<script setup>
import { useSidebarStore } from './stroe/sidebar'
// use开头 hooks sidebar 状态来到此处

const sidebarStore = useSidebarStore()
console.log(sidebarStore,sidebarStore.collapse,sidebarStore.handleCollapse);

</script>

<style lang="css" scoped>

</style>