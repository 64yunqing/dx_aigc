<template>
    <h2 @click="happy">{{ count }}</h2>
    <!-- <h3 v-if="count<30">happy</h3>
    <h3 v-else-if="count<40">sad</h3>
    <h3 v-else>pan</h3> -->

    <h4 v-show="count<30">我很开心</h4>

</template>

<script setup>
    import { ref } from 'vue'
    const count = ref(20)  
    const happy = () => {
        count.value++
    }
    
</script>

<style lang="css" scoped>

</style>