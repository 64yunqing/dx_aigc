var WordDictionary = function() {
    this.words = []
  };
  
  WordDictionary.prototype.addWord = function(word) {
    this.words.push(word);
  }
  
  WordDictionary.prototype.search = function(word) {
    // if (this.words.includes(word)) {
    //   return true
    // } else {
    //   // hello  ===  .ello
    //   let len = this.words.length
    //   let words = this.words   // []
    //   if (len == 0) return false
    //   for (let i = 0; i < len; i++) {  
    //     let item = words[i]  //  'hello'
    //     let L = 0
    //     if (item.length !== word.length) {
    //       return false
    //     }
  
    //     while(L < item.length) {
    //       if (item[L] === word[L]) {
    //         L++
    //       } else {
    //         if (word[L] !== '.') {
    //           return false
    //         } else {
    //           L++
    //         }
    //       }
    //     }
    //     return true
  
    //   }
    // }
  
    if (this.words.length === 0) {
      return false
    }
  
    if (!word.includes('.')) {
      return this.words.includes(word)
    }
    // .
    const res = new RegExp(word)
    return this.words.some(function(item) {
      if (item.length === word.length) {
        return res.test(item)
      } else {
        return false
      }
    })
    
  };
  
  let wordDictionary = new WordDictionary();
  wordDictionary.addWord("bat");
  
  console.log(wordDictionary.search("b.")); // 返回 False