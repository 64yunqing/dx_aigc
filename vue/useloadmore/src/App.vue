<template>
  <section>
    <article
      class="item"
      v-for="(item ,index) in articles"
      :key="item.id"  
      :ref="(el) => (index === articles.length-1 ? (itemRef = el) : null)"
    >
      <div>{{ index }} {{ item.title }}</div>
    </article>
    <div v-if="!hasMore">
      没有数据了
    </div>
  </section>
</template>

<script setup>
import { toRefs,onMounted,ref } from 'vue'
import { useArticleStore } from './store/article';
// 封装 loadmore 响应式业务的hook 函数
import { useLoadMore } from './hooks/useLoadMore'
const store = useArticleStore()
const currentPage = ref(1)
const { articles } = toRefs(store)
let hasMore = ref(true)
const itemRef = ref(null)
const handleNextPage = async () => {
  currentPage.value++;
  const res =await store.getArtiles(currentPage.value)
  if(!res.hasMore){
    setHasMore(false)
    hasMore.value = false;
  }
}
const { setHasMore } = useLoadMore(itemRef,() => {
  handleNextPage(setHasMore )
})
onMounted(async() => {
  await store.getArtiles(currentPage.value)
})

</script>

<style lang="css" scoped>
.item {
  height: 20vh;
}
</style>