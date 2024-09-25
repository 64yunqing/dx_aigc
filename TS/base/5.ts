// function foo(a: number,b: number): void {
//     // return a + b
// }
// foo(1,2)

// type Formate = (x: Date) => string

// let formateTime: Function = (date: Date) => {
//     return date.getHours() + ':' + date.getMinutes()
// }

// formateTime(new Date())


function map<T,U>(arr: T[] ,f: (arg: T) => U): U[] {
    return arr.map(f);
}




map(['1','2','3'],(n) => parseInt(n))
