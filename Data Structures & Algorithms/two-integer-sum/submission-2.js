class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /*----1.Brute  Foce  Approach  
            TC:O(n^2)
            Sc:O(1) */
            // for(let i=0;i<nums.length-1;i++){
            //     let  sum=0;
            //     for(let j=i+1;j<nums.length;j++){
            //         if(nums[i]+nums[j]===target){
            //             return [i,j]
            //         }
            //     }
            // }
            // return [];
        /*----2. USing Hash tables -----*/
            const indices={};
            for(let i=0;i<nums.length;i++){
                indices[nums[i]]=i;
            }
            for(let i=0;i<nums.length;i++){
                let diff=target-nums[i];
                if(indices[diff] !== undefined && indices[diff] !==i){
                    return[i,indices[diff]]
                };

            }
            return[]
    }   
}
