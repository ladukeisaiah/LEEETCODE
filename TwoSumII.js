/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1
    while(left<=right) {
        const sum = numbers[left] + numbers[right]
        if(sum === target){
            return [left+1, right+1]
        } 
        if(sum > target){
            right--;
        } else {
            left++;
        }
    }
};

// Finishing Statement: After completing this problem, I understand two important things, the importance of a sorted array
// and the importance of distinguishing between weakly and stricly changing values in an array. The sorted array is important
// in this case because the action of "moving" left or right based on the result of sum wouldn't be logical without the array being
// sorted. For the weakly and strictly changing values, this affects whether there are duplicates allowed within the array, this can
// affect the logic of our algorithm and could cause issues if you have a repeat of a sum value. In the case of how I created my function,
// it won't be a problem, it would just be slower if the array has duplicates to be searched through.