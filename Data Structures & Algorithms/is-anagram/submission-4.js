class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        /*--- 1. Sorting Approach
            TC: O(nlogn + mlogn)
            SC:O(n + m)
         ------ */
            // if(s.length !== t.length) return false;
            // let sSort=s.split('').sort().join('');
            // let tSort=t.split('').sort().join('');
            // return sSort===tSort;
        /*---- 2. Hash Tables Approach ------ */
            // if(s.length !== t.length) return  false;
            // const countS={};
            // const countT={};
            // for(let i=0;i<s.length;i++){
            //     countS[s[i]]=(countS[s[i]] ||0)+1;
            //     countT[t[i]]=(countT[t[i]]||0)+1;
            // }
            // // checking key are matched or not :::
            // for(const key in countS){
            //     if(countS[key] !== countT[key]) return false;
            // }
            // return true;
        /* ---- 3. Hash  Tables Approach :: using  one  hash map -----*/
        // if(s.length !==t.length) return false;
        // const count={};
        // for(let i=0;i<s.length;i++){
        //     count[s[i]]=(count[s[i]] ||0)+1
        // }
        // for(const ch of t){
        //     if(!count[ch])return false;
        //     count[ch]--;
        // }
        // return true;

        /*------   4.  Making all alpha into  lower Case------   */
        if(s.length !== t.length) return false;
        const arr=new Array(26).fill(0);
        for(let i=0;i<s.length;i++){
            arr[s.charCodeAt(i) -97]++;
            arr[t.charCodeAt(i) -97]--;
        }
        // for(let num of arr){
        //     if(num !==0)return false;
        // }
        // return true;

        return arr.every((val)=> val===0)
            
    }
}
