// Problem Statement ->
// https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/description/

// 1st Submission

function specialArray(nums: number[]): number {
    nums = nums.sort((a,b) => a-b)

    let result = -1
    for(let i=0; i<=nums[nums.length-1]; i++) {
        let count = 0
        for(let j=0; j < nums.length; j++) {
            if(nums[j] >= i) count++
        }

        if (count === i) {
            result = i
            break
        }
    }

    return result
};

// 2nd Submission

function specialArray2(nums: number[]): number {
    nums = nums.sort((a,b) => a-b)
    const len = nums.length
    if(nums[0] >= len) {
        return len
    }
    for(let i = 1; i < len; i++) {
        if(nums[i] >= len-i && nums[i-1] !== len-i && len-i > nums[i-1]) {
            return len-i
        }
    }

    return -1
};

