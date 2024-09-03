// Problem Statement ->
// https://leetcode.com/problems/3sum/

// 1st Submission, some test cases failed 

function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a,b) => a-b)

    let l,r;
    const result: number[][] = []
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i-1]) {
            i++
            continue
        }

        l = i + 1
        r = nums.length - 1

        while (l < r){
            if(nums[l] === nums[l+1] && r-l !== 1) {
                l += 1
                continue
            }
            if(nums[r] === nums[r-1] && r-l !== 1) {
                r -= 1
                continue
            }
            if(nums[i] + nums[l] + nums[r] > 0) {
                r -= 1
            }else if(nums[i] + nums[l] + nums[r] < 0) {
                l += 1
            } else  {
                result.push([nums[i], nums[l], nums[r]])
                r -= 1
                l += 1
            }
        }
    }
    return result
};
