const nums = [1,2,3,4,5]

function bubbleSort() {
    let swapped;
    do {
        swapped = false
        for(let i = 0; i < nums.length - 1; i++) {
            if (nums[i] < nums[i + 1]) {
                swapped = true
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
            }
        }
    } while(swapped)
}

console.log(JSON.stringify(nums))

bubbleSort()

console.log(JSON.stringify(nums))