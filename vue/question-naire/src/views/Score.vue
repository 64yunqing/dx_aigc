<template>
    <div class="score">
        <header class="your_score">
            <span class="score_num">100</span>
            <div class="result_tip">提示语</div>
        </header>
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import { useQuestionStore } from '@/store/question';
// import { storeToRefs } from 'pinia';

const _state = reactive({
    scoreTipsArr: [
        "你说，是不是把知识都还给小学老师了？",
        "还不错，但还需要继续加油哦！",
        "不要嘚瑟还有进步的空间！",
        "智商离爆表只差一步了！",
        "你也太聪明啦，旅梦欢迎你！",
      ],
      score: 0
})
const { state } = useQuestionStore()

const score = computed(() => {
    let sum = 100
    const ans =100/(state.answerList.length) 
    if(state.value.answerList.length===0)return 0
    for(let i=0;i<state.value.answerList.length;i++){
        if(!state.value.questionList[i].topic_answer[state.value.answerList[i]].is_standard_answer){
            sum -= ans
        }

    }
    return sum
})

// const pic ='../assets/images/4-1.jpg'
// pic.then(res => {
//     document.body.style.backgroundImage = `url(${res.default})`;
// })
</script>

<style lang="css" scoped>

</style>
<style lang="css">
    body{
        background:url('@/assets/images/4-1.jpg');
    }

</style>