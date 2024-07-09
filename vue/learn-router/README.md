# 路由
模拟当url改变时，切换显示不同的组件，实现成多页的效果

# 组件
1. router-link
2. router-view

# 路由跳转
1. router-link
2. router.push() ...   //编程式路由跳转

# 参数
1. 通过useRoute()得到当前url的详细信息来获取

传递：router.push({path:'/hot',query:{id:123}})
接收：route.query.id

传递：router.push({name:'hot',params:{id:123'}})
接收：router.params.id
接收：const props = defineProps({
                        id:String
                    })