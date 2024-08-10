<template>
        <div class="item-wrapper flex space-x-2 w-screen overflow-scroll px-4">
                <div class="item flex-[0_0_auto] w-28 space-y-2" v-for="(item) in items" :key="item.title">
                        <div class="item-image">
                                <img :src="item.cover" alt="item.name" class="rounded-lg" />
                            </div>
                        <div class="item-info">
                                <div class="item-name text-xs font-bold">{{ item.title }}</div>
                            </div>
                    </div>
            </div>
</template>

<script setup lang="ts">
import type { RecentlyViewItem } from '../types/home'
// 工具函数库
// ts 里比js复杂
// 数据
interface Props {
    items: RecentlyViewItem[]
}

defineProps<Props>()
</script>

<style scoped></style>