let toProxy = new WeakMap() // 原对象：代理对象
let toRow = new WeakSet() // 代理对象


function isObject(val) {
  return typeof val === 'object' && val !== null
}
function reactive(target) {
  return createReactiveObject(target)
}
function createReactiveObject(target) {
  if (!isObject(target)) {
    return target
  }
  let proxy = toProxy.get(target)
  if (proxy) {
    return proxy
  }
  if (toRow.has(target)) {
    return target
  }

  let baseHandler = {
    get(target, key, receiver) {
      console.log('读取');
      let result = Reflect.get(target, key) // target[key]
      return isObject(result) ? reactive(result) : result  // 递归
    },
    set(target, key, value, receiver) {
      console.log('修改');
      return Reflect.set(target, key, value, receiver) // 将target中的key值修改为value
    }
  }
  // 对象代理
  let observed = new Proxy(target, baseHandler)
  toProxy.set(target, observed)
  toRow.add(observed, target)
  return observed
}




let obj = {
  a: 1,
  b: 2,
  c: {
    n: 3
  },
  d: ['q', 'w']
}
let proxy = reactive(obj)  // {{} => {xxx}, {xxx} => {xxxxxxx}}

// proxy.d.length = 3
proxy.e = 8

// let proxy3 = reactive(obj) // 
// proxy.c.n = 300
// console.log(proxy.c.n);
// proxy.d[0] = 'qq'
// proxy.d.push('e')

// let proxy2 = reactive(proxy)