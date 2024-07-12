<template>
    <Header></Header>
</template>

<script setup>
import Header from './components/header/index.vue';
import {getSeller} from '@/api/index';

getSeller().then(res => {
    console.log(res);
})


</script>

<style lang="css" scoped>

</style>