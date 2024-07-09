/**
 * @func 基于localStorage封装Storage类,单例模式
 * @author wow奶茶
 * @date 2024-6-3 
 */
// 语法糖
class Storage{
    static instance;
    static getInstance() {
        // JS 动态 static 属性
        // JS 没有类，都是对象
        if(!Storage.instance) {
            Storage.instance = new Storage();
        }
        return Storage.instance;
    }

    getItem(key) {
        return localStorage.getItem(key);
    }

    setItem(key, value) {
        localStorage.setItem(key, value);
    }
}

// new Storage();
const instance = Storage.getInstance();
export default Storage;