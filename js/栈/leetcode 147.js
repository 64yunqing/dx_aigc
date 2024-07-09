var MinStack = function() {
    this.stack = []
    this.min = []
};
MinStack.prototype.push = function(x) {
  if(!this.min.length||x<=this.min[this.min.length-1]){
    this.min.push(x)
  }
  this.stack.push(x)
};
MinStack.prototype.pop = function() {
    if(this.stack.pop()===this.min[this.min.length-1]){
        this.min.pop()
    }
};
MinStack.prototype.top = function() {
  if(!this.stack.length)return
  return this.stack[this.stack.length-1]
};
MinStack.prototype.getMin = function() {
//   let min = Infinity;
//   for(let i=0;i<this.stack.length;i++){
//   min = Math.min(min,this.stack[i])
// }
return this.min[this.min.length-1]
};
const minStack = new MinStack();
minStack.push(-2);
minStack.push(2);
minStack.push(-3);
minStack.getMin();   // --> 返回 -3.
minStack.pop();
minStack.top();      //--> 返回 2.
minStack.getMin();   //--> 返回 -2.