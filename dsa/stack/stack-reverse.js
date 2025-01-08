class Stack {
  constructor() {
    this.stack = [];
  }
  push(value) {
    this.stack.push(value);
  }
  pop() {
    return this.stack.pop();
  }
  reverseStackUsingAuxilliaryStack() {
    const auxStack = [];
    while (this.stack.length) {
      auxStack.push(this.pop());
    }
    this.stack = auxStack;
  }
  reverseStackUsingRecursion(stack) {
    if (stack.length > 0) {
      const temp = stack.pop();
      this.reverseStackUsingRecursion(stack);
      this.insertElementInReverseOrder(stack, temp);
    }
  }
  insertElementInReverseOrder(stack, elementToInsert) {
    if (stack.length == 0) {
      stack.push(elementToInsert);
      return;
    }
    const temp = stack.pop();
    this.insertElementInReverseOrder(stack, elementToInsert);
    stack.push(temp);
  }
  sortStackUsingAuxStack(stack = this.stack) {
    const auxStack = [];
    while (stack.length > 0) {
      const temp = stack.pop();
      while (auxStack.length > 0 && auxStack[auxStack.length] > temp) {
        stack.push(auxStack.pop());
      }
      auxStack.push(temp);
    }
    this.stack = auxStack;
  }
  sortStackUsingRecursion(stack = this.stack) {
    if (stack.length > 0) {
      const temp = stack.pop();
      this.sortStackUsingRecursion(stack);
      this.insertElementInOrder(stack, temp);
    }
  }
  insertElementInOrder(stack, elementToInsert) {
    if (stack.length == 0 || stack[stack.length - 1] > elementToInsert) {
      stack.push(elementToInsert);
      return;
    }
    const temp = stack.pop();
    this.insertElementInOrder(stack, elementToInsert);
    stack.push(temp);
  }
}

const st = new Stack();

st.push(10);
st.push(20);
st.push(30);
st.push(40);
st.push(50);

console.log(JSON.stringify(st.stack));

st.sortStackUsingRecursion(st.stack);

console.log("helo", JSON.stringify(st.stack));
