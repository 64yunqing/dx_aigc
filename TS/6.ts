const obj: {x: number,y: number} = {x: 1,y: 2}

// Object > object > {}


// interface Person = {
//     name: string,
//     age: number,
//     sex: 'male' | 'female'
// }

type Person1 = {
    say: Function
}

interface Per {
    like: string[]
}

interface Person extends Per,Person1 {
    name: string,
    age: number,
    sex: 'male' | 'female'
}

let p1: Person = {
    name: 'John',
    age: 34,
    sex: 'male',
    like: ['football'],
    say: () => {}
}
