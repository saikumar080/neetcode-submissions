class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map=new Map();
        nums.forEach((ele)=>{
            map.set(ele,(map.get(ele)||0)+1);
        })
        for(let [key,value]of map){
            if(value >1)return true;
        }
        return false;
    }
}
