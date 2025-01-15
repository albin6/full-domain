const nums = [64, 34, 25, 12, 22, 11, 90]

function insertionSort() {
    for (let i = 1; i < nums.length; i++) {
        let key = nums[i]
        let j = i - 1
        while (j >= 0 && nums[j] > key) {
            nums[j + 1] = nums[j]
            j--
        }
        nums[j + 1] = key
    }
}

console.log(JSON.stringify(nums))

insertionSort()

console.log(JSON.stringify(nums))