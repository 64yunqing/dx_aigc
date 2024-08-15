<script setup>
// use 开头， 特别方便 
import { computed } from 'vue'
import { useStore } from './store/gvuex'

const store = useStore()
const count = computed(() => store.state.count)
// store.state.count++
store.dispatch('asyncAdd')
</script>

<template>
  <div>
  {{count}}
  </div>
</template>

<style scoped>

</style>
