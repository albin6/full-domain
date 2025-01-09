// implement stack (method to get the smallest item in the stack in o(1) time)

class Stack {
  constructor() {
    this.items = [];
    this.minStack = [];
  }
  push(value) {
    // check stack overflow condition
    this.items.push(value);
    if (this.minStack.length == 0 || value < this.getMin()) {
      this.minStack.push(value);
    }
  }
  isEmpty() {
    return this.items.length == 0;
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const stack = new Stack();

stack.push(10);
stack.push(13);
stack.push(5);
stack.push(9);
stack.push(1);

console.log(JSON.stringify(stack.items));
console.log(JSON.stringify(stack.minStack));
