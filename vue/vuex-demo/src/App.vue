<template>
  <div>
{{ count }}
<button @click="increment">+</button>
<app-header />
  </div>
</template>


<script setup>
import { useStore } from "vuex"
import { computed } from "vue"
import AppHeader from "./components/AppHeader.vue"

const store = useStore() // hooks 编程
console.log(store.state.count);
const count = computed(() => store.state.count)

const increment = () => {
  // 派出 increment action 
  store.dispatch("increment")
}

</script>

<style lang="css" scoped>

</style>