<template>
    <div>
        Hot page ---{{ $route.params.id }}
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router'
    const route = useRoute()
console.log(route.params.id);

defineProps({
    id:String
})


</script>

<style lang="css" scoped>

</style>