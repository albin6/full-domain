const nums = [64, 34, 25, 12, 22, 11, 90]

function mergeSort(arr) {
    if (arr.length <= 1 ) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge(left, right)
}

function merge(left, right) {
    const sorted = []
    while (left.length && right.length) {
        if (left[0] > right[0]) {
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }
    return [...sorted, ...left, ...right]
}

console.log(JSON.stringify(nums))
console.log(JSON.stringify(mergeSort(nums)))