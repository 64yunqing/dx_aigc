<template>
    <div class="shop-cart">
        <div class="content">
            <div class="content-left">
                
                <div class="logo-wrap">
                    <div class="logo" :class="{'active': count!==0}">
                        <i class="iconfont icon-gouwuche" :class="{'active': count!==0}"></i>
                    </div>
                    <div class="num" v-show="count">
                        {{ count }}
                    </div>
                </div>
                <div class="price" :class="{'active': count!==0}">￥ {{ pay }}</div>
                <div class="desc">另需配送费{{ seller.deliveryPrice}}元</div>
            </div>
            <div class="content-right">
                <div class="pay" v-if="seller.minPrice-pay>0">还差{{ seller.minPrice-pay }}元起送</div>
                <div class="pay":class="{'enough':seller.minPrice-pay<=0}">去结算</div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { computed } from 'vue';

const props = defineProps ({
    shopcart: {
        type: Array,
        default: () => ({})
    },
    seller: {}
    
})

const count = computed(()=> {
    let sum=0
    for(let i = 0; i < props.shopcart.length; i++){
        sum += props.shopcart[i].count
    }
    return sum
})

const pay = computed(()=> {
    let sum=0
    for(let i = 0; i < props.shopcart.length; i++){
        sum += props.shopcart[i].price*props.shopcart[i].count
    }
    return sum
}) 



</script>

<style lang="less" scoped>
@import '@/assets/variable.less';

.shop-cart {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 46px;

  .content {
    display: flex;
    background-color: @color-background;
    color: @color-light-grey;

    &-left {
      flex: 1;
      display: flex;

      .logo-wrap {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: #141d27;
        padding: 6px;
        box-sizing: border-box;
        margin: 0 12px;
        position: relative;
        top: -10px;

        .logo {
          width: 100%;
          height: 100%;
          background-color: @color-dark-grey;
          border-radius: 50%;
          text-align: center;

          &.active {
            background-color: @color-blue;
          }

          .iconfont {
            font-size: @fontsize-large-xxx;
            line-height: 44px;

            &.active {
              color: @color-white;
            }
          }
        }

        .num {
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          color: @color-white;
          background-color: @color-red;
          border-radius: 16px;
          font-size: @fontsize-small-s;
        }
      }

      .price {
        line-height: 46px;
        padding-right: 12px;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        font-size: @fontsize-large;
        font-weight: bold;

        &.active {
          color: @color-white;
        }
      }

      .desc {
        line-height: 46px;
        font-size: @fontsize-small-s;
        margin-left: 20px;
      }
    }

    &-right {
      flex: 0 0 105px;

      .pay {
        width: 100%;
        height: 100%;
        line-height: 46px;
        text-align: center;

        &.enough {
          background-color: green;
          color: white;
        }
      }
    }
  }
}
</style>