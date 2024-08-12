<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr />
    <h2>Product</h2>
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

const store = useStore() // hooks
// 依赖的vuex 状态发生改变时，
const products = computed(() => store.state.products.all)
console.log(products,'----------------------');
// commit mutation dispatch 派出一个action 
store.dispatch('products/getAllProducts');

</script>

<style lang="css" scoped>

</style>