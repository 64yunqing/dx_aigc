<template>
  <div>
    <!-- <TestSlot>
      <div>默认SLOT</div>
      <template #header>
        <header>header slot</header>
      </template>
      <template #footer>
        <footer>footer slot</footer>
      </template>
    </TestSlot> -->
    <router-view/>
  </div>
</template>

<script setup>
// import TestSlot from './TestSlot.vue'
import { useSidebarStore } from './stroe/sidebar'
// use开头 hooks sidebar 状态来到此处
const sidebarStore = useSidebarStore()
console.log(sidebarStore,sidebarStore.collapse,sidebarStore.handleCollapse);

</script>

<style lang="css" scoped>

</style>