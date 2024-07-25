function randomInt(min, max) {
  const n = Math.random()
  return Math.floor((max - min) * n + min)
}


// [1, 2, 3, 4, 10, 6, 7, 8, 9, 5]  // 4 - 10  // 4 - 5 // 4 - 10

function createRandomPicker(arr) {
  arr = [...arr]
  function randomPick() {
    const len = arr.length - 1
    const index = randomInt(0, len);
    [arr[index], arr[len]] = [arr[len], arr[index]]
    return arr[index]
  }
  randomPick()  // 放弃第一次
  return randomPick
}

module.exports = {
  randomInt,
  createRandomPicker
}

// function randomPick(arr) {
//     const index = randomInt(0, arr.length)
//     lastPick = arr[index]
//     return arr[index]
//   }