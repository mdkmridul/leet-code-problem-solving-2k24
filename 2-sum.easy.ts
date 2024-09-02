// problem-statement ->
// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
    let values = {}
    for(let i in nums) {
        values[nums[i]] = i
    }

    let result = []
    for(let i in nums) {
       const subtract = target - nums[i]
       if(values[subtract] && values[subtract] !== i) {
        return [i, values[subtract]]
       } 
    }
    return []
};