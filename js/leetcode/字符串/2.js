// const str = 'abcd'
// const newStr = str.split('').reverse().join('')//翻转
// console.log(newStr)

// const str = 'yesey'
// const newStr = str.split('').reverse().join('')

// console.log(str===newStr); 

const str = 'yesey'
function isPalindrome(s){
    const len = s.length
    for(let i=0;i<len/2;i++){
        if(s[i] !== s[len-1-i]){
            return false
        }
    }
    return true
}
console.log(isPalindrome(str));