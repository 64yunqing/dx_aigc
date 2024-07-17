import { createStore } from 'vuex' // 只有一个store

// 全局状态
// 不再有父兄子 陌生人 login
// 状态对象 
const state = {
    count: 0, // 计数状态
    user:null
}
// 修改， 要按流程 动作
const actions = {
    increment: ({ commit }) => {
        console.log( '///////' );
        commit('increment')
    } 
}
// 所有的状态修改都要经过mutations
// 只有mutaions 可以修改状态
const mutations = {
    increment(state) {
        console.log('??????');
        state.count++
    }
}
// 除了读操作，对写操作非常严格
const store = createStore({
    state,
    mutations,
    actions
})

export default store