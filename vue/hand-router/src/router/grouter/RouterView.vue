<template>
    <component :is="component" />   
</template>

<script setup>
import { useRouter } from './index'
import { computed } from 'vue'

const router = useRouter()
console.log(router);
// router-view 动态组件 展示依赖于 url 的变化
// 响应式  router.current 设置为ref

const component = computed(() => {
    const route = router.routes.find(
        (route) => route.path == router.current.value
    )    
    console.log(route,'/????????/////////////');
    return route? route.component:null
})
</script>

<style lang="css" scoped>

</style>