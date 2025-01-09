class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }
  insertNode(value) {
    if (!this.root) {
      this.root = new BSTNode(value);
      return;
    }
    let node = this.root;
    while (node) {
      if (value < node.value) {
        if (!node.left) {
          node.left = new BSTNode(value);
          return;
        } else {
          node = node.left;
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = new BSTNode(value);
          return;
        } else {
          node = node.right;
        }
      }
    }
  }
  removeNode(value, node) {
    if (!node) {
      return;
    }
    if (value < node.value) {
      node.left = this.removeNode(value, node.left);
    } else if (value > node.value) {
      node.right = this.removeNode(value, node.right);
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      if (node.left && node.right) {
        let current = node.right;
        while (current.left) {
          current = current.left;
        }
        node.value = current.value;
        node.right = this.removeNode(node.value, node.right);
      }
    }
    return node;
  }
  inOrderTraversal(node = this.root, result = []) {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
  }
  preOrderTraversal(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
    }
  }
  postOrderTraversal(node = this.root, result = []) {
    if (node) {
      this.postOrderTraversal(node.left, result);
      this.postOrderTravers4al(node.right, result);
      result.push(node.value);
    }
  }
  levelOrderTraversal() {
    const queue = [this.root];
    const result = [];
    while (queue.length) {
      const current = queue.shift();
      result.push(current.value);
      if (current.left) {
        queue.push(current.left);
      } else {
        queue.push(current.right);
      }
    }
  }
}

const BST = new BSTree();

BST.insertNode(30);
BST.insertNode(20);
BST.insertNode(25);
BST.insertNode(15);
BST.insertNode(40);
BST.insertNode(35);
BST.insertNode(45);
BST.insertNode(41);

BST.removeNode(40, BST.root);

console.dir(BST.root, { depth: null });
