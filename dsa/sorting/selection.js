const nums = [1, 2, 3, 4, 5]

function selectionSort() {
    for (let i = 0; i < nums.length; i++) {
        let max = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[max]) {
                max = j
            }
        }
        if (max != i) {
            [nums[max], nums[i]] = [nums[i], nums[max]]
        }
    }
}

console.log(JSON.stringify(nums))

selectionSort()

console.log(JSON.stringify(nums))