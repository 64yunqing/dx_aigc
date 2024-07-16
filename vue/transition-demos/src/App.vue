<template>
  <div class="page">
    <div class="card">
      <div class="card__header">
        <h3 class="cart-title">{{ name }}</h3>
        <div class="card-subtitle">Transition & Animation</div>
      </div>
      <div class="card__content">
        <!-- <div :class="['emoji',{pulse: !isActive}]">🤡</div> -->
         <!--
         <transition name="pulse"> 
            <div v-if="isActive" class="emoji">🤡</div>
         </transition>
         -->
         <transition
          class="animate__tada"
          enter-active-class="animate__animated animate__tada"
          leave-active-class="animate__animated animate__bounce"
         >
         <div v-if="isActive" class="emoji">🤡</div>
         </transition>
         </div>  
      <div class="card__action">
        <button type="button" @click="isActive = !isActive;">请按这里</button>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'

const name = 'wow奶茶';
const isActive = ref(true);



</script>

<style lang="css" scoped>
@import './styles/app.css';
@import './styles/card.css';
@import './styles/animation.css';
</style>