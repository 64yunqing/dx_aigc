<template>
    <div class="homr">
        <div class="top-bg absolute h-36 -z-10 
        w-screen bg-gradient-to-b from-pink-300 to-white"></div>
        <van-search
            v-model="searchField"
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
            background="transparent"
            class="mb-2"
            >
            <template #action>
                <div class="text-white">
                    <van-icon name="search" class="shopping-cart-o" size="1.25rem" />
                </div>
            </template>
        </van-search>
        <main class="flex flex-col space-y-4 ">
            <header class="w-[calc(100vw-2rem)] min-h-24 bg-white rounded-2xl p-2 shadow-md self-center">
                <section class="topbar flex justify-around mb-3">
                    <div class="topbar-item flex flex-col items-center"
                    v-for="item in topBarState"
                    :key="item.title"
                    >
                    <div class="topbar-item__icon">
                        <van-icon :name="item.icon" size="2rem" />
                    </div>
                    <div class="topbar-item__next text-xs">{{ item.title }}</div>
                </div>
                </section>
            </header>
        </main>
    </div>
</template>

<script setup>
// 数据
// pinia 数据管理 + 组件显示
import { useHomeStore } from '@/store/homeStore'
import { toRefs } from 'vue';

const homeStore = useHomeStore();
const {
    topBarState,
    navBarState,
    recentlyViewedState
} = toRefs(homeStore)

</script>

<style lang="css" scoped>

</style>