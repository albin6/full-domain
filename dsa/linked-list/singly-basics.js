class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertNodeAtFirst(value) {
    this.head = new Node(value, this.head);
  }
  insertNodeAtEnd(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }
  insertNodeAtPosition(value, index) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    if (index == 1) {
      this.head = new Node(value, this.head);
    }
    let current = this.head;
    let i = 1;
    while (i < index - 1) {
      current = current.next;
      i++;
    }
    current.next = new Node(value, current.next);
  }
  removeFromFirst() {
    if (!this.head) {
      throw new Error("List is empty");
    }
    this.head = this.head.next;
  }
  removeFromLast() {
    if (!this.head) {
      throw new Error("List is empty");
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
  removeFromASpecificIndex(index) {
    if (!this.head) {
      throw new Error("List is empty");
    }
    if (index == 1) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let i = 1;
    while (i < index - 1) {
      current = current.next;
      i++;
    }
    current.next = current.next?.next;
  }
}

const ll = new LinkedList();

ll.insertNodeAtFirst(8);
ll.insertNodeAtEnd(10);
ll.insertNodeAtEnd(20);
ll.insertNodeAtFirst(5);
ll.insertNodeAtPosition(6, 2);
ll.insertNodeAtPosition(15, 5);
console.dir(ll, { depth: null });

ll.removeFromASpecificIndex(6);

// ll.removeFromLast();
// ll.removeFromFirst();

console.dir(ll, { depth: null });
