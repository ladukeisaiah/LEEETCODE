/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    const res = [];
    for(let i = 0; i <nums.length; i++){
        if(i > 0 && nums[i] == nums[i-1]){
            continue;
        }
        let j = i+1;
        let k = nums.length-1;
        while(j<k){
            const sum = nums[i] + nums[j] + nums[k]
            if(sum > 0){
                k--;
            }
            if(sum < 0){
                j++;
            }
            if(sum === 0) { // found a triplet
                res.push([nums[i], nums[j], nums[k]]);
                while(j<k && nums[j] === nums[j+1]){
                    j++;
                }
                while (j < k && nums[k] == nums[k - 1]) {
                    k--; // Skip duplicate for `k`
                }
                j++; // Move `j` to the next unique element
                k--; // Move `k` to the previous unique element
            }
        }
    }
    return res;
};