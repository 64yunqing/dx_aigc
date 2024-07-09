<template>
  <div>{{ msg }}</div>
  <div v-text="msg2"></div>
  <div v-html="msg3"></div>
</template>

<script setup>
    const msg ='hello world'
    const msg2 ='hello vue'
    const msg3 ='<p>疑是地上霜</p><p>低头思故乡</p>'
</script>

<style lang="css" scoped>

</style>