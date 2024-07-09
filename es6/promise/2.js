var adta = null
function a(cb){ //ajax
    setTimeout(() => {
        data = 'hello'
        cb()
    }, 1000);
}

function b(){
    console.log(data)
}
a(b)