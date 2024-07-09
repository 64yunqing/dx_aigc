<template>
    <h2>{{ tem }}</h2>
    <h5>{{ suggest }}</h5>
    <button @click="add">+1</button>
    <button @click="minus">-1</button>
</template>

<script setup>
import { ref,watch,computed } from 'vue'

let tem = ref(20)

const add = () => {
    tem.value+=5
}
const minus = () => {
    tem.value-=5
}

const suggest = computed(()=>{
    if(tem.value>=30){
        return'短袖'
    }else if(tem.value>=20){
        return'夹克'
    }else if(tem.value>=10) {
        return'棉袄'
    }else {
        return '棉袄'
    }
})

// watch(tem,(newVal,oldVal)=>{
//     if(newVal>=30){
//         suggest.value = '短袖'
//     }else if(newVal>=20){
//         suggest.value = '夹克'
//     }else if(newVal>=10) {
//         suggest.value = '棉袄'
//     }else {
//         suggest.value = '棉袄'
//     }
// },{immediate:true})


</script>

<style lang="css" scoped>

</style>