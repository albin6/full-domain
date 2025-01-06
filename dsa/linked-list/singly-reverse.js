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
  insertNodeLast(value) {
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
  printList(node) {
    let result = "";
    while (node) {
      result += node.value;
      if (node.next) {
        result += " -> ";
      }
      node = node.next;
    }
    console.log(result);
  }
  reverseList() {
    let current = this.head;
    let prev = null;
    while (current) {
      const nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.printList(prev);
  }
}

const ll = new LinkedList();

ll.insertNodeLast(10);
ll.insertNodeLast(20);
ll.insertNodeLast(30);
ll.insertNodeLast(40);
ll.insertNodeLast(50);

ll.printList(ll.head);
ll.reverseList();
