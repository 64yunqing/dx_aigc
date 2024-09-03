import { reactiver,ReactiveFlags,reactiveMap,shallowReactiveMap } from "./reactive.js"
import { isObject } from "../shared/index.js";
import { track } from "./effect.js"

const get = createGetter() // 读取的拦截函数
const set = createSetter() // 设置的拦截函数
const shallowReactiveGet = createGetter(true)

function createGetter(shallow = false){
    return function get(target, key, receiver){
        const isExistMap = () => key === ReactiveFlags.RAAW && (
            reactiver === reactiveMap.get(target)||
            reactiver === shallowReactiveMap.get(target) 
        )
        // 是否二次代理
            if(key === ReactiveFlags.IS_REACTIVE){
                return true
            } else if(!isExistMap()){
                return target
            }

        const res = Reflect.get(target, key, receiver)
        console.log('读取值');
        // 收集副作用函数
        track(target,'get',key)
        
        if(isObject(res)){
            return shallow ? res : reactiver(res) // 递归
        }
        return res
    }
}

function createSetter(){
    return function set(target,key,value,receiver){
        const res = Reflect.set(target,key,value,receiver)
    }
}



export const mutableHandlers = {
    get,
    set
}

export const shallowReactiveHandlers = {
    get,
    set 
}