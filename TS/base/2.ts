let x: any = 1
x = '2'
x = undefined



let y: unknown = 1
y = '1'
y = true
y = {} 


let str: string = 'hello'
str = x
// str = y


let z: never 


function foo(): never {
    let x = 1
    return z 
}