// Problem Statement ->
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

function twoSumSorted(numbers: number[], target: number): number[] {
    let [l,r] = [0, numbers.length-1]
    while (l < r)
        if(numbers[l] + numbers[r] === target) {
            return [l+1,r+1]
        } else if( numbers[l] + numbers[r] > target) {
            r -= 1
        } else if(numbers[l] + numbers[r] < target) {
            l += 1
        }
    return []
};