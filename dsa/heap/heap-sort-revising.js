function heapSort(arr) {
    const size = arr.length

    for(let i = Math.floor((size - 1) / 2); i >= 0; i--) {
        heapify(arr, size, i)
    }

    for(let i = size - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapify(arr, i, 0)
    }
}

function heapify(arr, n, i) {
    let largest = i
    const leftChld = 2 * i + 1
    const rightChild = 2 * i + 2

    if (leftChld < n && arr[leftChld] < arr[largest]) {
        largest = leftChld
    }

    if (rightChild < n && arr[rightChild] < arr[largest]) {
        largest = rightChild
    }

    if (largest != i) {
        [arr[largest], arr[i]] = [arr[i], arr[largest]]
        heapify(arr, n, largest)
    }
}

const nums = [4,2,1,5,3,8]

console.log(JSON.stringify(nums))

heapSort(nums)

console.log(JSON.stringify(nums))