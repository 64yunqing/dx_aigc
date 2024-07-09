<!-- <template>
<img :src="pic" alt="">
<a :href="url" target="_blank">去百度</a>

<h2 @click="handle" :class="[active ? 'red' : 'green']">点击变成红色</h2>
<input type="text" @input="onChange" :value="val">

<h4 @click="changeval">{{ val }}</h4>
</template> -->
<!-- 
<script setup>
import { ref } from 'vue'
const pic ='https://p8.itc.cn/images01/20200720/f79b376bed174b039f62151b3fe07491.jpeg'
const url = 'https://www.baidu.com/'
let name = ref('')
let active = ref(false)
const handle = ()=>{
    active.value =!active.value
}
let val = ref('hello')
const onChange = (e)=>{
    console.log("onChange",e.target.value)
    val.value = e.target.value
}
const changeval = ()=>{
    val.value +='o'
}




// const handle = ()=>{
//     name.value ='red'
// }
</script> -->

<!-- <style lang="css" scoped>

img{
    width: 400px;
}
.red{
    color: red;
}
.green{
    color: green;
}
</style> -->

<template>
    <div>
        <h2 @click="handle">{{msg}}</h2>
        <input type="text" v-model="msg">
    </div>
</template>

<script setup>
import { ref } from 'vue'
const msg = ref('hello')
const handle = () =>{
    msg.value += 'h'
}
</script>

<style lang="css" scoped>

</style>