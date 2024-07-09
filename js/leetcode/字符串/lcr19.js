// var s = "abc" //"abecdba"

// var validPalindrome = function(s){ 
//     if(isPalindrome(s)){
//         return true
//     }

//     for(var i = 0; i < s.length; i++){
//         let arr = s.split('')
//         arr.splice(i,1)
//         if(isPalindrome(arr.join(''))){
//             return true
//         }
//     }
//     return false
// };


// function isPalindrome(s){
//     const len =s.length
//     for(var i = 0; i < len/2; i++){
//         if(s[i] !== s[len-1-i]){
//             return false
//         }
//     }
//     return true
// }

// console.log(validPalindrome(s));

var s = 'abcbcaa'

var validPalindrome = function(s){
    let i =0, j =s.length -1

    while(i<j&&s[i]==s[j]){
        i++
        j--
    }

    if(isPalindrome(i+1,j)){
        return true
    }
    if(isPalindrome(i,j-1)){
        return true
    }
    return false
    //跳过一项再判断
    // isPalindrome(i,j)
}   
function isPalindrome(i,j){
    while(i<j){
      if(s[i]==s[j]){
        i++
        j--
      }else{
        return false
      }
    }
    return true
}

console.log(validPalindrome(s));