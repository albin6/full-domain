function heapSort(arr) {
    const n = arr.length

    for(let i = Math.floor((n - 1) / 2); i >= 0; i--) {
        heapify(arr, n, i)
    }

    for(let i = n - 1; i > 0; i--) {
        heapify(arr, i, 0)
    }
}

function heapify(arr, n, i) {
    let largest = i
    const leftChld = 2 * i + 1
    const rightChild = 2 * i + 2

    if (leftChld < n && arr[leftChld] > arr[largest]) {
        largest = leftChld
    }

    if (rightChild < n && arr[rightChild] > arr[largest]) {
        largest = rightChild
    }

    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapify(arr, n, largest)
    }
}

const nums = [4, 2, 1, 5, 3, 8]

console.log(JSON.stringify(nums))

heapSort(nums)

console.log(JSON.stringify(nums))