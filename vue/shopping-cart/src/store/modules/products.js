import API from '../../api/shop'
const state = {
    all: []
}

const getters = {
    
}

const actions = {
    // api 请求 -》 提交mutations     
    // commit ? vuex 给 actions 可以commit mutations 的API 
    getAllProducts({ commit }) {
        API.getProducts((products) => {
            console.log(products);
            commit('setProducts', products)
        })
    }
}
// 比pinia 复杂的地方
// 规定了数据怎么可以变化 
// 财务 对数据的修改原则 
const mutations = {
    // vuex mutations api 第一个参数是state 
    // products ？ 
    setProducts(state, products) {
        state.all = products
    },
    decrementProductInventory(state, { id }) {
        const product = state.all.find(product => product.id === id)
        product.inventory--
    }
}
// store.product.all
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

