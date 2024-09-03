<template>
  <div>
    {{state.msg}}
  </div>
  <h2>{{ state.data.name }}</h2>
  <button @click="ChangeName">修改</button>
</template>

<script>
import { reactive } from './reativity/reactive';
import { effect } from './reativity/effect';
import { ref } from './reativity/ref';

  export default {
    setup() {
      const state = reactive({
        msg: 'hello',
        data:{
          name: 'zhangsan'
        }
      })

      const num = ref({a:1})
      num.value.a = 2

      
      

      effect(() => {
        console.log(`${state.msg}`);
      },{lazy:true})

      const ChangeName =()=>{
        state.msg='12323132'
      }
      
        return{state,ChangeName}
    }
  }
  
</script>

<style lang="css" scoped>

</style>