const queue = []
queue.push('辣椒炒肉,爆辣椒,油条糍粑')

while(queue.length){
    const top = queue[0]
    console.log(top)
    queue.shift();
}