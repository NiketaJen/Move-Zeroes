var moveZeroes = function(nums) {
    let placeNonZeroes = 0;

    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== 0){
            nums[placeNonZeroes] = nums[i];
            placeNonZeroes++;
        }
    }

    for(let i = placeNonZeroes; i<nums.length; i++){
        nums[i] =0
    }
    return nums
};

//Time complexity: O(n)
//Space complexity: 0(1) as input size increases, space does not increase
//1st loop looks at number in array and if it is not = to 0, moves that number to the indexed position and increments to next number