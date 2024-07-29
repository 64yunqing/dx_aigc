<template>
    <div class="note-list">
        <ul>
            <li>
                <div class="img">
                    <img src="" alt="">
                </div>
                <div class="time">2024-7-29</div>
                <div class="title">标题</div>
            </li>
            <li>
                <div class="img">
                    <img src="" alt="">
                </div>
                <div class="time">2024-7-29</div>
                <div class="title">标题</div>
            </li>
            <li>
                <div class="img">
                    <img src="" alt="">
                </div>
                <div class="time">2024-7-29</div>
                <div class="title">标题</div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import axios from '@/api/index.js';

console.log(res);

const route = useRoute();

const title = route.query.title

const res = await axios.get('/findNoteListByType',{
    params:{
        note_type:title
    }
})
</script>

<style lang="less" scoped>

.note-list{
    width: 100%;
    padding: 1rem 0.667rem 0;
    box-sizing: border-box;
    ul{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 50px;
        grid-row-gap: 30px;
        li{
            font-size: 0.37rem;
            .img{
                width: 100px;
                height: 4rem;
                border-radius: 0.27rem;
                img{
                    width: 100%;
                    height: 100%;
                }
                .title{
                    margin-top: 5px;
                }
            }
        }
    }
    }
</style>0