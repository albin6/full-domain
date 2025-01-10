class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

export class BSTree {
    constructor() {
        this.root = null
    }
    insertNode(value) {
        if (!this.root) {
            this.root = new BSTNode(value)
            return
        }
        let current = this.root
        while (current) {
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
    isBalanced() {
        function getHeight(node) {
            if (!node) {
                return 0
            }
            const leftHeight = getHeight(node.left)
            const rightHeight = getHeight(node.right)

            if (Math.abs(leftHeight - rightHeight) > 1) {
                return -1
            }

            return Math.max(leftHeight, rightHeight) + 1
        }
        return getHeight(this.root) !== -1
    }
    reBuildBST() {
        const treeNodes = this.levelOrderTraversal()
        this.root = null
        this.buildBST(treeNodes)        
    }
    buildBST(node) {
        if (!node.left) {
            return
        }
        const mid = treeNodes.length / 2
        const left = treeNodes.slice(0, mid)
        const right = treeNodes.slice(mid + 1)
        
    }
    levelOrderTraversal() {
        const result = []
        const queue = [this.root]
        while (queue.length) {
            const current = queue.shift()
            result.push(current.value)
            if (current.left) {
                queue.push(current.left)
            } 
            if (current.right) {
                queue.push(current.right)
            }
        }
        return result    
    }
}

const bst = new BSTree()

bst.insertNode(20)
bst.insertNode(10)
bst.insertNode(5)
bst.insertNode(15)
bst.insertNode(30)
bst.insertNode(35)
bst.insertNode(25)
bst.insertNode(45)
bst.insertNode(55)

console.dir(bst.root, {depth : null})

const isBalanced = bst.isBalanced()

if (!isBalanced) {
    bst.reBuildBST()
}

console.dir(bst.root, {depth : null})
