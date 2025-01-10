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
    isBalancedBST() {
        function findHeight(node) {
            if (!node) {
                return 0
            }
            const leftHeight = findHeight(node.left)
            const rightHeight = findHeight(node.right)

            if (Math.abs(leftHeight - rightHeight) > 1) {
                return -1
            }

            return Math.max(leftHeight, rightHeight) + 1
        }
        return findHeight(this.root) !== -1
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

console.log(bst.isBalancedBST())