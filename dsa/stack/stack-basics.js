class Stack {
  constructor(size = 10) {
    this.stack = [];
    this.size = size;
  }
  push(value) {
    if (this.getSize() > this.size) {
      throw new Error("Stack overflow");
    }
    this.stack.push(value);
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow");
    }
    return this.stack.pop();
  }
  getSize() {
    return this.stack.length;
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}
