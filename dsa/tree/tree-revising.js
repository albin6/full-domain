class BSTNode {
    constructor(value) {
      this.value = value
      this.left = null;
      this.right = null
    }
  }
  
  class BSTree {
    constructor() {
      this.root = null
    }
    
    insertNode(value) {
      if (!this.root) {
        this.root = new BSTNode(value)
        return
      }
      
      let current = this.root
      while(current) {
        if (value < current.value) {
          if (!current.left) {
            current.left = new BSTNode(value)
            return
          } else {
            current = current.left
          }
        } else if (value > current.value) {
          if (!current.right) {
            current.right = new BSTNode(value)
            return
          } else {
            current = current.right
          }
        } else {
          return
        }
      }
    }
    removeNode(value, node = this.root) {
      if (!this.root) {
        throw new Error('tree is empty')
      }
      
      if (value < node.value) {
        node.left = this.removeNode(value, node.left)
      } else if (value > node.value) {
        node.right = this.removeNode(value, node.right)
      } else {
        if (!node.left && !node.right) {
          return null
        }
        
        if (!node.left) {
          return node.right
        }
        
        if (!node.right) {
          return node.left
        }
        
        if (node.left && node.right) {
          let current = node.right
          while(current.left) {
            current = current.left
          }
          
          node.value = current.value
          node.right = this.removeNode(node.value, node.right)
        }
      }
      return node
    }
  }
  
  const bst = new BSTree()
  
  bst.insertNode(20)
  bst.insertNode(30)
  bst.insertNode(10)
  bst.insertNode(5)
  bst.insertNode(15)
  bst.insertNode(35)
  bst.insertNode(32)
  bst.insertNode(25)
  
  console.dir(bst, {depth : null})
  
  bst.removeNode(30)
  
  console.dir(bst, {depth : null})