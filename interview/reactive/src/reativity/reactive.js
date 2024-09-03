import { mutableHandlers,shallowReactiveHandlers } from "./baseHandlers";
export const reactiveMap = new WeakMap(); // 记录被深层代理的对象
export const shallowReactiveMap = new WeakMap(); // 记录被浅层代理的对象
export const ReactiveFlags = {  // 代理的标记
    IS_REACTIVE: '__v_isReactive'
}

export function reactive(target){
    return createReactiveObject(target, reactiveMap,mutableHandlers)
}

export function shallowReactive(target){
    return createReactiveObject(target, shallowReactiveMap,shallowReactiveHandlers)

}

function createReactiveObject(target,proxyMap,proxyHandlers){
    if(typeof target !== 'object'){
        return target
    }

    // 是否曾被代理过
    const existingProxy = proxyMap.get(target)
    if(existingProxy){
        return existingProxy
    }

    // 去代理
    const proxy = new Proxy(target,proxyHandlers)
    proxyMap.set(target,proxy)
    return proxy
}