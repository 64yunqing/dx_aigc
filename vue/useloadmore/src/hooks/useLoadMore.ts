// 手写 加载更多的hook ， 基于IntersectionObserver
import type { Ref } from 'vue'
import { ref,watch } from 'vue'
export const useLoadMore = (
    // Ref 类型
    // HTMLElement DOM节点
    // HTMLElement | null  ts  联合类型
    nodeRef :Ref<HTMLElement|null>,
    loadMore :() => void
) => {
    let observer :IntersectionObserver | null= null
    const hasMore = ref(true)
    // 监听最后元素的改变，oberse 新的元素
    watch(nodeRef,(newNodeRef,oldNodeRef) => {
        if(oldNodeRef && observer){
            observer.unobserve(oldNodeRef)
        }
        // 第一次
        if(newNodeRef){
            observer = new IntersectionObserver(([entry]) => {
                // 只有一个
                if(entry.isIntersecting){
                    loadMore()
                    // nextTick
                }
            })
            // 观察最后的节点
            observer.observe(newNodeRef)
        }
    })


    watch(hasMore,(value)=>{
        if(observer){
            // 后面又有了
            if(value&& nodeRef.value){
                observer.observe(nodeRef.value)
            }else{
                // 释放observer 对象的 以后一页
                observer.disconnect()
            }
        }
    })
    return {
        hasMore,
        setHasMore:(value:boolean) => {
            hasMore.value = value
        }
    }
}