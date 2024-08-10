import { defineStore } from 'pinia'
// 关键数据要限制类型
import { ref } from 'vue'
// 勾引 面试官 es6 module 问题
import type {
    ScrollItem,
    RecentlyViewItem,
    ServiceContent
} from '../types/home.ts'

export const useHomeStore = defineStore('home', () => {
    // topBarState 响应式状态 topBarState topBarState.value
    // const topBarState = ref<HomeTopBarItem[]>([
    //     {
    //         title: "推荐",
    //         icon: "photo-o"
    //     },
    //     {
    //         title: "商城",
    //         icon: "coupon-o",
    //     },
    //     {
    //         title: "智驾AI",
    //         icon: "gam-o",
    //     },
    //     {
    //         title: "交通",
    //         icon: "logistics",
    //     },
    //     {
    //         title: "租车",
    //         icon: "guide-o",
    //     },
    // ])



    const recentlyViewedState = ref<ScrollItem[]>([
        {
            title: "汇天陆地航母",
            cover:
                "https://img1.baa.bitautotech.com/dzusergroupfiles/2024/03/28/71fb20d84a284e65bdb86505b0b8b4b5.jpg",
            
        },
        {
            title: "汇天一体式飞行汽车",
            cover:
                "https://image.bitautoimg.com/appimage-800-w0/news/2023/10/24/272d2ba5-e53d-46c3-add7-6f9fccdd8627.jpg",
        },
        {
            title: "旅航者X2",
            cover:
                "https://n.sinaimg.cn/sinakd20115/46/w1024h622/20221012/9c00-456a09cf9f60d5f6aac50957df565069.jpg",
        },
        {
            title:"旅航者T1",
            cover:"https://image.bitautoimg.com/appimage-1265-w0/mapi/news/2023/10/26/3987a6ecdf3e47e8a7a662a3c34d95f0.png",
        },

    ])
    const CarsClass = ref<RecentlyViewItem[]>([
        {
            title:"小鹏P7i",
            cover:"https://s.xiaopeng.com/xp-fe/mainsite/2023/p7i-v2/m/p2.jpg",
            url:"https://www.xiaopeng.com/p7i.html?reserve_source=168801"
        },
        {
            title:"小鹏X9",
            cover:"https://xps01.xiaopeng.com/www/public/img/p3.f4375ac0.jpg",
            url:"https://www.xiaopeng.com/x9.html?reserve_source=168801"
        },
        {
            title:"2024款G9",
            cover:"https://s.xiaopeng.com/xp-fe/mainsite/2023/g92024/v2/dsde563dfg5/m/p2-1.jpg",
            url:"https://www.xiaopeng.com/g92024.html?reserve_source=168801"
        },
        {
            title:"小鹏G6",
            cover:"https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v2/m/p3-1.jpg",
            url:"https://www.xiaopeng.com/g6.html?reserve_source=168801"
        },
        {
            title:"2024小鹏P5",
            cover:"https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/m/p2.jpg",
            url:"https://www.xiaopeng.com/p5.html?reserve_source=168801"
        }
    ])
    const serviceContent = ref<ServiceContent[]>([
        {
            title:"超长无忧质保",
            cover:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/shouhou1.jpg",
            content:"最高5年/12万公里整车质保，8年/16万公里三电质保，可选超值终身质保产品"
        },
        {
            title:"终身无忧救援",
            cover:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/shouhou2.jpg",
            content:"7*24H全天守候，无忧救援随时待命，让您安心出行"
        },
        {
            title:"智能服务守护",
            cover:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/shouhou3.jpg",
            content:"7*24H智能在线诊断、智能故障预警，守护车辆健康"
        }
    ])
    return {
        // topBarState,
        recentlyViewedState,
        CarsClass,
        serviceContent
    }
})