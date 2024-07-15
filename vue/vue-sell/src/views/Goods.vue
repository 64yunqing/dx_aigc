<template>
    <div class="goods">
        <div class="goods-content">
            <div class="menu-wrap" ref="menuWrap">
                <ul>
                    <li class="menu-item" @click="selectMenu(index);"
                        :class="{ 'current': currentIndex === index }" 
                        v-for="(item, index) in state.goods"
                        :key="index">
                        <span class="text">
                            <SupportIcon :size="3" :type="item.type" v-if="item.type" />{{ item.name }}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="foods-wrap" ref="foodsWrap">
                <ul>
                    <!-- 菜系 -->
                    <li ref="foodList" class="food-list" v-for="(item, index) in state.goods" :key="index">
                        <h1 class="title">{{ item.name }}</h1>
                        <ul>
                            <!-- 菜品 -->
                            <li class="food-item" v-for="(food, index) in item.foods" :key="index">
                                <div class="pic">
                                    <img :src="food.icon" alt="">
                                </div>
                                <div class="content" >
                                    <h2 class="name">{{ food.name }}</h2>
                                    <div class="desc">{{ food.description }}</div>
                                    <div class="extra">
                                        <span class="count">月售{{ food.sellCount }}份</span>
                                        <span>好评率{{ food.rating}}%</span>
                                    </div>
                                    <div class="price">
                                        <span class="now">￥{{ food.price }}</span>
                                        <span class="old" v-if="food.oldPrice">￥{{ food.oldPrice }}</span>
                                    </div>
                                    <div class="cartcontrol-wrap">
                                        
                                        <Cart :food="food" @update:food="updateFood"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <ShopCart :shopcart="state.selectedFoods" :seller="seller"/>
</template>

<script setup>
import SupportIcon from '@/components/support-icon/index.vue';
import { getGoods } from '@/api/index';
import { ref, nextTick, onMounted, reactive ,computed} from 'vue';
import BScroll from '@better-scroll/core'
import Cart from '@/components/cart-control/index.vue';
import ShopCart from '@/components/shop-cart/index.vue';

defineProps({
    seller:{}
})

const foodList = ref(null)
const selectMenu = (i) =>{
    state.currentIndex = i
    state.foodsScorll.scrollToElement(foodList.value[i],100)
}

const state = reactive({
    goods: [],
    currentIndex: 0,
    foodsScorll:null,
    listHeight:[],
    scrollY:0,
    selectedFoods:[]
});
onMounted(() => {
    getGoods().then(res => {
        state.goods = res;
        nextTick(() => { // 只会在组件编译挂载且渲染完成后才执行
            initScroll()
            calulateHeight()
        })
    });
})

// 滚动效果
const menuWrap = ref(null)
const foodsWrap = ref(null)
const initScroll = () => {
    new BScroll(menuWrap.value, {
        click: true
    })
    state.foodsScorll = new BScroll(foodsWrap.value, {
        click: true,
        probeType:3
    })

    state.foodsScorll.on('scroll',pos => {
        state.scrollY=Math.abs(pos.y)

    })
}

const calulateHeight = (i) =>{
    // foodList.value[0].clientHeight
    let height = 0
    state.listHeight.push(height)
    foodList.value.forEach(li => {
        height += li.clientHeight
        state.listHeight.push(height)
    })
}

const currentIndex = computed(()=>{
    for(let i = 0; i < state.listHeight.length ; i++){
        let h1 = state.listHeight[i]
        let h2 = state.listHeight[i+1]
        if( !h2 || (state.scrollY >= h1 && state.scrollY < h2)){
            return i
        }
    }

})

// 子组件点了+
const updateFood = () =>{
    // 将用有count字段的对象都挑出来
    const arr =[]
    for(let good of state.goods){
        for(let food of good.foods){
            if( food.count && !state.selectedFoods.includes(food)){
                arr.push(food)
            }
        }
    }
    state.selectedFoods = arr
    console.log(state.selectedFoods);
}
</script>

<style lang="less" scoped>
@import '@/assets/variable.less';

.goods {
    width: 100%;
    position: absolute;
    bottom: 46px;
    top: 177px;
    overflow: hidden;
    .goods-content {
        display: flex;
        height: 100%;

        .menu-wrap {
            flex: 0 0 80px;
            background-color: @color-background-ssss;
            // overflow-y: scroll;

            .menu-item {
                padding: 0 12px;
                font-size: @fontsize-small;
                height: 54px;
                display: flex;
                justify-content: center;
                align-items: center;

                &.current {
                    background-color: white;
                    font-weight: bold;
                }
            }
        }

        .foods-wrap {
            flex: 1;

            .title {
                height: 26px;
                line-height: 26px;
                font-size: @fontsize-small;
                color: rgb(147, 153, 159);
                background-color: @color-background-ssss;
                padding-left: 14px;
                border-left: 2px solid #d9dde1;
            }

            .food-item {
                display: flex;
                padding: 18px;

                .pic {
                    flex: 0 0 57px;
                    margin-right: 10px;

                    img {
                        width: 100%;
                    }
                }

                .content {
                    flex: 1;
                    position: relative;

                    .name {
                        font-size: @fontsize-medium;
                        color: @color-background;
                        margin: 2px 0 8px 0;
                    }

                    .desc,
                    .extra {
                        font-size: @fontsize-small-s;
                        color: rgb(147, 153, 159);
                        margin-bottom: 8px;

                        .count {
                            margin-right: 12px;
                        }
                    }

                    .price {
                        font-weight: 700;

                        .now {
                            font-size: @fontsize-medium;
                            color: @color-red;
                            margin-right: 8px;
                        }

                        .old {
                            font-size: @fontsize-small-s;
                            color: rgb(147, 153, 159);
                            text-decoration: line-through;
                        }
                    }

                    .cartcontrol-wrap {
                        position: absolute;
                        right: 0;
                        bottom: 12px;
                    }
                }
            }
        }
    }
}
</style>