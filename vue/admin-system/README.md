# v3 后台管理系统

- 实习项目，外包必备
    - 后台出了问题，不是大事
        给小编、销售、老板用的， 与用户端产品联动
    - 什么项目都要有个后台
        外包 加个需求

- VUE 组件库 ElementPlus
    - main.js use ElementPlus 和加载css
    - 太大了，太慢了
    - 按需 加载 一个个use 

- 路由
    - 放心使用history  不用care hash的兼容性




- 五星路由功能
    - 两种路由形式的优缺点
        hash 兼容好 但形式不好
        history 兼容性差 但是和后端路由一致
        结合项目分析 后台系统 自己人用 history
        用户项目，如果要考虑兼容性，用hash，用户端移动项目不太需要兼容性，
        用history也行
        hash (用户 + PC 产品)
    - 路由的懒加载
    - 二级路由
    - 路由守卫
        - 登录鉴权  auth
        - 角色权限 role     admin  user  ['']
    - 403 404 
    - meta 用法
        - title     document.title
        - auth  login
        - permiss role 
    - NProgress  进度条
        用户体验 
        router.beforeEach
        router.afterEach
    - history 概念展示出来
        useRouter  push  go(-1)


- ElForm 的用法
    - ElementPlus UI组件库中的Form组件
    - ElForm ElFormItem ElInout ElCheckbox
    - v-model 双向绑定 reactive { username,password,....}
        - ElForm :model="param"
    - validate rules 配置一下
        - 对 form 进行 ref 绑定， 绑定的是Form 组件
        - 提交之前 valid一下 Form对象上有validate 方法
    - 提交 反馈成功或失败  跳转

- pinia
    - 状态管理
    - 比vuex更年轻更好用
    - app.use(createPinia())

- 全局状态设计
    - collapse 状态 true | false 
        - 窄屏的pad 
        - v-if/v-else + action collapse
    - permiss 权限状态
        - 跨组件层级访问是常态
        - key , defaultList
        - dedfaultList 可用于计算 login.vue ms_name this.handle_set  key
        - router.js 403 
        - 任何地方 

- Object.entries 的用法 和应用场景
    - es6 新增的遍历对象的方法
    - Object.keys() Object.values() 的基础上 将key value 做为一个数组的1,2 项返回两组数组
    - app.component 全局声明组件的时候 一次性的把ElementPlus/icons 全部注册
    - for of + 展开运算符 
    - ElementPlus 设计的很好， 个人开发者可能用icons,企业一般会有自己的icons
        ElementPlus 将icons 拆开，更轻，同时也提供了定制性

- css 特性
    - transition
    - css4 variable 主题切换
        :root{ -- }
        var()
    
- ElDropDown
    - 触发DropDown的内容 交给slot
    - DropDownMenu 内容? 交给具名slot
    - slot 带来了组件超级定制性
    - ElDialog slot header   default footer  三部分，无限复用
    - template vue 内置组件 包一下内部的内容，挂载到页面上就消失
        <template #header>

- template 的用法
    - vue 组件的模板声明
    - template #title 具名slot 插入到相应位置
    - template 接收指令 v-if v-show