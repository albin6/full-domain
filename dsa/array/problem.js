const nums = [1, 3, 5, 6, 7, 9, 2, 11, 13, 4, 15]

function removeAdjacentOdds() {
    let count
    for (let i = 0; i < nums.length; i++) {
        count = 1
        if(nums[i] % 2 != 0) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] % 2 != 0) {
                    count++
                } else {
                    break
                }
            }
        }
        if (count != 1) {
            nums.splice(i, count)
            i--
        }
    }
}

console.log(JSON.stringify(nums))

removeAdjacentOdds()

console.log(JSON.stringify(nums))