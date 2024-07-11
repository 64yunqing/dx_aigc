<template>
        <div class="container mx-auto p-4 ">
            <div class="bg-white shadow-md rounded-lg p-8 mt-8">
                <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
                <div class="text-gray-700 mb-4">
                    <p v-html="post.category"></p >
                </div>
            </div>
        </div>
    </template>
    
    <script setup>
    import { onMounted,ref } from 'vue';
    import { useRoute } from 'vue-router'
    import { getPostById, getRecommendPosts } from '../api/index';

    // import { useRouter } from 'vue-router'
    // 当前路由对象 hooks 编程  use开头
    const route = useRoute();
    // const router = useRouter();
    const id = route.params.id;
    const post = ref({});
    
    onMounted(async () => {
        const data = await getPostById(id);
        if(data) {
            post.value = data;
        }
        const recommends = await getRecommendPosts(id);

        // console.log(data,'//////')
        // post.value = data.data;
        // post.value = await getPostById(id);
    })
    </script>
    
    <style lang="css" scoped>
    
    </style>