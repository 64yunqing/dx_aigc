<template>
    <div class="flex flex-col h-full">
        <div 
        class="h-1/2 px-4 py-4 sm:px-6 lg:px-8 flex flex-col gap-y-4 overflow-scroll">
            <template v-if="view==='question'">
                <p class="text-sm font-medium leading-6 text-gray-400">
                    Examples
                </p>
                <ul class="flex flex-col gap-y-1">
                    <li v-for="(example, index) in examples" :key="index">
                        <Icon name="icon:sparkles" class="text-primary" size="20" />
                        {{example}}
                    </li>
                </ul>
            </template>
            <div v-else>
            </div>
        </div>
        <UButton>按钮</UButton>
    </div>
</template>
<script lang="ts" setup>
import { ref,onMounted } from 'vue'
const view = ref<'chat' | 'question'>('question')
const examples = [
  'A login screen with email, google, and apple login.',
  'A Tweet UI with retweet and like buttons.',
  'A cookie consent banner',
  'A toolbar for a wysiwyg editor',
  'A FAQ section',
]
onMounted(()=>{
    fetch('/api/chat',{
        'method': 'POST',
    })
})
</script>