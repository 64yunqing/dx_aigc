<template>
    <nav>
      <router-link to="/home">首页</router-link>|
      <router-link to="/bot">BOT</router-link>|
      <router-link to="/hot">沸点</router-link>|
    </nav>


    <!-- 路由入口 -->
     <router-view></router-view>
     
</template>

<script >
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="css" scoped>

</style>