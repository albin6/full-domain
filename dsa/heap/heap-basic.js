class Heap {
    constructor() {
        this.items = []
    }
    leftChild(index) {
        return 2 * index + 1
    }
    rightChild(index) {
        return 2 * index + 1
    }
    parentIndex(index) {
        return Math.floor((index- 1) / 2)
    }
    compare(parent, child) {
        if (this.type == 'min') {
            return this.items[parent] > this.items[child]
        } else {
            return this.items[parent] < this.items[child]
        }
    }
    insertNode(value) {
        this.items.push(value)
        this.bubbleUp(this.items.length - 1)
    }
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = this.parentIndex(index)
            if (this.compare(parentIndex, index)) {
                [this.items[parentIndex], this.items[index]] = [this.items[index], this.items[parentIndex]]
                index = parentIndex
            } else {
                break
            }
        }
    }
    removeNode() {
        if (this.items.length == 0) {
            throw new Error('Heap is empty')
        }
        const temp = this.items[0]
        const last = this.items[this.items.length-1]
        if (this.items.length > 1) {
            this.items[0] = last
            this.items.pop()
            this.bubbleDown(0)
        }
        return temp
    }
    bubbleDown(index) {
        const size = this.items.length
        while (this.leftChild(index) < size) {
            let leftChild = this.leftChild(index)
            let rightChild = this.rightChild(index)
            if (rightChild < size && this.compare(leftChild, rightChild)) {
                leftChild = rightChild
            }
            if (this.compare(index, leftChild)) {
                [this.items[index], this.items[leftChild]] = [this.items[leftChild], this.items[index]]
                index = leftChild
            } else {
                break
            }
        }
    }
}

const heap = new Heap()

heap.insertNode(10)
heap.insertNode(5)
heap.insertNode(15)
console.log(heap.items)

console.log(heap.removeNode())

console.log(heap.items)
