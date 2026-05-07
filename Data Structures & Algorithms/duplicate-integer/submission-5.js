class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        /*----------       Brute Force Approach::       --------*/
            // for(let i=0;i<nums.length-1;i++){
            //     for(let j=i+1;j<nums.length;j++){
            //         if(nums[i] ===nums[j]) return true;
            //     }
            // }
            // return false;

        /*----- 2. Using  Sort Approach  Modified the  Array ------ */
        nums.sort((a,b)=>a-b);
        for(let i=1;i<nums.length;i++){
            if(nums[i]===nums[i-1])return true;
        }
        return false;
    }
}
