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

// 2nd Submission
    // - should check for the sum first rather than having it at the end, that will make us miss some of the combinations
    // - use while loop to move pointer on the l & r so that other operations are stopped while we do it, which will be the case if we have just if condition inside the first while loop
    // - capture values before moving any pointers, so try to match with last value rather than matching with the next one

function threeSumUpdated(nums: number[]): number[][] {
    nums = nums.sort((a,b) => a-b)

    let l,r;
    const result: number[][] = []
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) break
        if(i > 0 && nums[i] === nums[i-1]) {
            continue
        }

        l = i + 1
        r = nums.length - 1

        while (l < r){
            if(nums[i] + nums[l] + nums[r] === 0) {
                result.push([nums[i], nums[l], nums[r]])
                r -= 1
                l += 1
                while (l < r && nums[l] === nums[l-1]) {
                    l += 1
                }
                while (l < r && nums[r] === nums[r+1]) {
                    r -= 1
                }
            } else if(nums[i] + nums[l] + nums[r] > 0) {
                r -= 1
            } else {
                l += 1
            }
            
        }
    }
    return result
};
