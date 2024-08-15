// 
class EventEmitter {
    constructor(){
        this.cache ={}
    }
    on(name,fn){
        if(this.cache[name]){
            this.cache[name].push(fn)
        }else {
            this.cache[name] = [fn]
        }
    }
    emit(name,once = false,...args){
        if(this.cache[name]){
            // 执行 但不要影响订阅者
            let tasks = this.cache[name].slice()
            for(let fn of tasks){
                fn(...args)
            }
            if(once){
                delete this.cache[name]
            }
        }
    }
    off(name,fn){
        let tasks = this.cache[name]
        if(tasks){
            const index = tasks.findIndex(f => f === fn || f.callback === fn)

        }
        if(index >= 0){
            tasks.splice(index,1)
        }
    }
}