<template>
    <ul>
        <li v-on:click="handle(item.id,item.name)"  
        v-for="(item,index) in list" :key="item.id">{{index+1}}-{{item.name}}</li>
    </ul>

</template>

<script setup>
const list = [
    {id:1,name:"庐州月"},
    {id:2,name:"千百度"},
    {id:3,name:"雅俗共赏"},
    {id:4,name:"多余的解释"}
]
const handle = (id,name) => {
    console.log(id,name)
}
</script>

<style lang="css" scoped>

</style>