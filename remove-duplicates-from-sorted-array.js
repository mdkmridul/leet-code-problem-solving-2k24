// problem-statement ->
// https://leetcode.com/problems/remove-duplicates-from-sorted-array


// My first choice but doesn't work for some reason. Will update later, why not?

function removeDuplicates(nums) {
    const uniqueValues = {}
    let result = []
    nums.forEach(num => {
        if(uniqueValues[num]) {
            result.push('_')
        } else {
        uniqueValues[num] = num
        }
    })

    nums = [...Object.values(uniqueValues), ...result]
    return Object.values(uniqueValues).length
};

/////////////////////////////////////////////////////////////////////////////////////////

var removeDuplicates = function(nums) {
    let count = 1
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
            nums[count] = nums[i]
            count++
        }
    }

    return count
};
