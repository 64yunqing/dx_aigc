<template>
    <Transition name="fade">
        <div class="header-detail">
            <div class="detail-wrapper">
                <div class="detail-main">
                    <h1 class="name">商店名字</h1>
                    <div class="star-wrapper">
                        ⭐⭐⭐⭐⭐
                    </div>

                    <div class="title">
                        <span>优惠信息</span>
                    </div>
                    <li class="supports" v-for="(item, index) in goods.supports" :key="index">
                        <span class="text">
                            <SupportIcon :size="1" :type="item.type" v-if="item.type" />{{ item.description }}
                        </span>
                    </li>
                    <div class="title">
                        <span>商家公告</span>
                    </div>
                    
                    <div class="bulletin">
                        <p class="content">{{ goods.bulletin }}</p>
                    </div>

                </div>
            </div>

            <div class="detail-close" @click.stop="close">
                <i class="iconfont icon-a-0-Close"></i>
            </div>
        </div>
        
    </Transition>
</template>

<script setup>
import SupportIcon from '@/components/support-icon/index.vue';
import { getSeller } from '@/api/index';
import { onMounted, ref } from 'vue';

const emits = defineEmits(['hide'])  // 创建事件
const close = () => {
    emits('hide', false);  // 发布了一个事件
}

const goods = ref({});

onMounted(() => {
    getSeller().then(res => {
        console.log(res);
        console.log(123);
        goods.value = res;
    })
})


</script>



<style lang="less" scoped>
@import '@/assets/variable.less';

.header-detail {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: @color-background-s;
    color: @color-white;
    z-index: 100;
    backdrop-filter: blur(10px);

    &.fade-enter-from,
    &.fade-leave-to {
        opacity: 0;
        background: @color-background;
    }

    &.fade-enter-active,
    &.fade-leave-active {
        transition: all 0.3s ease;

    }

    .detail-close {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);

        .iconfont {
            font-size: @fontsize-large-xxxx;
        }
    }

    .detail-wrapper {
        width: 100%;
        min-height: 100%;
        overflow: auto;

        .detail-main {
            margin-top: 64px;
            padding-bottom: 64px;

            .name {
                text-align: center;
                font-size: @fontsize-large;
                font-weight: bold;
            }

            .star-wrapper {
                padding: 2px 0;
                margin-top: 8px;
                text-align: center;

            }

            .title {
                width: 80%;
                margin: 28px auto 24px auto;
                text-align: center;
                display: flex;
                align-items: center;

                &::before,
                &::after {
                    content: '';
                    height: 1px;
                    background-color: @color-white;
                    flex: 1;
                }

                span {
                    font-size: @fontsize-medium;
                    padding: 0 12px;
                    font-weight: bold;
                }

                
            }
            .supports {
                    width: 80%;
                    margin: 0 auto;
                    padding: 0 12px;
                    font-size: @fontsize-small;
                    line-height: 24px;
                    list-style: none;
                    .text{
                        
                        display: flex;
                        align-items: center;
                        .iconfont{
                            margin: 6px;
                        }
                    }
                }

            .bulletin {
                width: 80%;
                margin: 0 auto;
                padding: 0 12px;
                font-size: @fontsize-small;
                line-height: 24px;
            }
        }
    }
}
</style>