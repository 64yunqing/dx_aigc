<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="minus">-1</button>
    <button @click="add">+1</button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  let count = ref(100)

  const add = () => {
    count.value++
  }
  const minus = () => {
    count.value--
  }
</script>

<!-- <script >
export default{
  data(){
    return{
      count:1
    }
  },
  methods:{
    minus(){
      this.count--
    },
    add(){
      this.count++
    }
  }
}
</script> -->

<!-- <script >
import {ref} from 'vue'
export default{
  setup(){
    let count = ref(10)
    const minus = ()=>{
      count.value--
    }
    const add = ()=>{
      count.value++
      
    }
    return {
      count,
      minus,
      add
    }
  }
}
</script> -->
<style lang="css" scoped>

</style>