function isObject(obj){
    if (typeof obj === 'object' && obj !== null){
        return true
    }
    return false
}

isObject(null)//true