<script setup>  
import { ref } from 'vue'
import Rate from './components/Rate1.vue'
// import Rate from './components/Rate0.vue'

let score = ref(3)
function update(num){
  score.value = num
}
</script>

<template>
 <div>
  <Rate :value="score" theme="yellow" @update-rate="update" />

<!--   
  <Rate :value="5" />
  <Rate :value="4" />
  <Rate :value="3" />
  <Rate :value="2" />
  <Rate :value="1" />
  <Rate :value="0" />
-->
 </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
