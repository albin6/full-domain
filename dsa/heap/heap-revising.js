class Heap {
    constructor() {
        this.items = []
        this.type = 'max'
    }
    leftChildIndex(index) {
        return 2 * index + 1
    }
    rightChildIndex(index) {
        return 2 * index + 2
    }
    parentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    compare(parent, child) {
        if (this.type == 'max') {
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
            throw new Error('heap is empty')
        }
        const temp = this.items[0]
        const last = this.items[this.items.length - 1]
        if (this.items.length > 0) {
            this.items[0] = last
            this.items.pop()
            this.bubbleDown(0)
        }
        return temp
    }
    bubbleDown(index) {
        const size = this.items.length
        while (this.leftChildIndex(index) < size) {
            let leftChildIndex = this.leftChildIndex(index)
            let rightChildIndex = this.rightChildIndex(index)
            if (rightChildIndex < size && this.compare(leftChildIndex, rightChildIndex)) {
                leftChildIndex = rightChildIndex
            }
            if (this.compare(index, leftChildIndex)) {
                [this.items[leftChildIndex], this.items[index]] = [this.items[index], this.items[leftChildIndex]]
                index = leftChildIndex
            } else {
                break
            }
        }
    }
}

const heap = new Heap()

heap.insertNode(30)
heap.insertNode(20)
heap.insertNode(40)
heap.insertNode(10)
heap.insertNode(15)
heap.insertNode(35)
heap.insertNode(45)

console.log(JSON.stringify(heap.items))

console.log(heap.removeNode())

console.log(JSON.stringify(heap.items))

console.log(heap.removeNode())

console.log(JSON.stringify(heap.items))

