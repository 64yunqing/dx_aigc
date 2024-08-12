const state = {
    items: []
}

const getters = {
    cartProducts:(state, getters, rootState) => {
        return state.items.map(({id, quantity}) => {
            const product = 
                rootState.products.all.find(product => product.id === id)
            return {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity
            }
        })
    }
}

const actions = {
    addProductToCart({ commit, state }, product) {
        // console.log(obj.rootState.count);
        if (product.inventory > 0) {
            const cartItem = state.items.find(item => item.id === product.id)
            if (!cartItem) {
            // 新添加到购物车
                commit('pushProductToCart', { id: product.id })
            } else {
                commit('incrementItemQuantity', cartItem)
            }
            commit('products/decrementProductInventory',
             { id: product.id }, { root: true })
        }

    }
}
// 比pinia 复杂的地方
// 规定了数据怎么可以变化 
// 财务 对数据的修改原则 
const mutations = {
    pushProductToCart(state, { id }) {
        state.items.push({
            id,
            quantity: 1
        })
    },
    incrementItemQuantity(state, cartItem) {
        // const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
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

