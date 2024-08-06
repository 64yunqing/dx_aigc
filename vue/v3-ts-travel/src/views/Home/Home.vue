<template>
    <div class="home">
        <div class="top-bg absolute h-36 -z-10 
        w-screen bg-gradient-to-b from-black to-white"></div>
        <van-search v-model="searchField" placeholder="请输入你想搜索的车型" show-action shape="round" background="transparent"
            class="mb-2 ">
            <template #action>
                <div class="text-white ml-10">
                    <van-icon name="shopping-cart-o" size="1.25rem" />
                </div>
            </template>
        </van-search>

        <main class="flex flex-col space-y-4 ">
            <!-- <header class="w-[calc(100vw)] min-h-24 bg-white rounded-2xl 
            p-2 shadow-md self-center">
                <section class="topbar flex justify-around mb-3">
                    <div class="topbar-item flex flex-col items-center" v-for="item in topBarState" :key="item.title">
                        <div class="topbar-item__icon">
                            <van-icon :name="item.icon" size="2rem" />
                        </div>
                        <div class="topbar-item__text text-xs">{{ item.title }}</div>
                    </div>
                </section>
                
                
            </header> -->
            <!-- 轮播 -->
            <van-swipe class="flex my-swipe" :autoplay="3000" indicator-color="white" lazy-render>
                <van-swipe-item v-for="item in recentlyViewedState" :key="item.title">
                    <div class="swiper-item-container relative">
                        <img :src="item.cover" alt="" />
                        <div
                            class="swiper-item-title absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white">
                            {{ item.title }}
                        </div>
                    </div>
                </van-swipe-item>

            </van-swipe>


            <section>
                <h2 class="title ">汽车品牌</h2>
                <div class="flex w-screen overflow-x-scroll space-x-2 px-4">
                    <div class="region-item flex-[0_0_auto]" v-for="item in CarsClass" :key="item.title">
                        <div class="item-wrapper w-64  rounded-lg overflow-hidden relative">
                            <a :href="item.url" target="_blank">
                            <img :src="item.cover" alt="" />
                            <div class="text-center">{{ item.title }}
                            </div>
                        </a>
                        </div>
                    </div>
                </div>
            </section>
            <div class="content-layout">
                <h1>售后服务</h1>
                <div class="title">
                    <div class="img-list">
                        <div class="title-wrapper p-4" v-for="item in serviceContent" :key="item.title">
                            <img :src="item.cover" alt="" />
                            <h2>{{ item.title }}</h2>
                            <p>{{ item.content }}</p>
                        </div>
                    </div>
                </div>
            </div>


        </main>
        <div class="flex justify-center mt-4 "> <!-- 添加了flex和justify-center类，并设置了一个顶部外边距 -->
            <van-button plain type="primary" class="w-48 h-16 text-xl" url="https://www.xiaopeng.com/customerservice.html?reserve_source=168801">了解售后服务></van-button>
        </div>
    </div>
    
</template>
<script lang="ts" setup>
import RecentlyViewCard from '@/components/RecentlyViewCard.vue'
//数据？
// pinia 数据管理 + 组件显式
import { ref } from 'vue'
import { toRefs } from 'vue'
import { useHomeStore } from '@/store/homeStore'

const homeStore = useHomeStore()

const searchField = ref('')
// 
const {
    // topBarState,
    // navBarState,
    recentlyViewedState,
    CarsClass,
    serviceContent
} = toRefs(homeStore)


</script>
<style>
.swiper-item-container {
    position: relative;
    overflow: hidden;
}

.swiper-item-title {
    position: absolute;
    bottom: 10%;
    /* 底部1/4处 */
    left: 0;
    right: 0;
    padding: 2px;
    /* 可以根据需要调整内边距 */
    background-color: rgba(0, 0, 0, 0.5);
    /* 半透明黑色背景 */
    color: white;
    text-align: center;
}
</style>
<style>
h1 {
    font-size: 50px;
    text-align: center;
}

h2 {
    font-size: 40px
}
</style>