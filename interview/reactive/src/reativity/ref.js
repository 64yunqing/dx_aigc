import { trigger } from "./effect"

export function ref(val){
    return createRef(val)
}

function createRef(val){
    return new RefImpl(val)
}

class RefImpl{
    constructor(val){
        this._val = val // 原始类型
    }


get value(){
    return this._val
}

set value(newVal){
    this._val = newVal
    // 视图更新
    trigger(this,'set','value')
}
}

