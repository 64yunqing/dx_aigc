import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { DiscountInfo } from '@/types/discount.ts' 

export const useDiscountStore = defineStore('discount', () => {
    const discountInfo = ref<DiscountInfo[]>([
        {
            id:1,
            title:'a'
        },
        {
            id:2,
            title:'b'
        }
    ])

    return {
        discountInfo
    }
})