<template>
    <Header :seller="sellerDate"></Header>
   
    <div class="tab">
        <div class="tab-wrap">
            <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-wrap">
            <router-link to="/comment">评论</router-link>
        </div>
        <div class="tab-wrap">
            <router-link to="/seller">商家</router-link>
        </div>
    </div>
    
    <RouterView :seller="sellerDate" ></RouterView>

</template>

<script setup>
import Header from './components/header/index.vue';
import {ref, onMounted} from 'vue';
import {getSeller} from '@/api/index';

const sellerDate = ref({});

onMounted(() =>{
    getSeller().then(res => {
    sellerDate.value = res;
    })
})


</script>

<style lang="less" scoped>
@import '@/assets/variable.less';
.tab{
    display: flex;
    height: 36px;

    &-wrap{
        flex: 1;
        a{
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 36px;
            text-decoration: none;
            color: @color-font;
            &.router-link-exact-active{
                color: @color-red;
                border-bottom: 2px solid @color-red;
            }
        }
    }
}
</style>