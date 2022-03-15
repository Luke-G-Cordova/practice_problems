// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 
// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 var groupAnagrams = function(strs) {
    if(strs.length === 1)return [strs];
    let hold = [];
    let retStrs = [];
    for(let i = 0;i<strs.length;i++){
        if(strs[i] === 0) continue;
        hold.unshift(strs[i]);
        strs[i] = 0;
        for(let k = i+1;k<strs.length;k++){
            if(areAnagrams(hold[0], strs[k])){
                hold.unshift(strs[k]);
                strs[k] = 0;
            }
        }
        retStrs.unshift(hold);
        hold = [];
    }
    return retStrs;
};
function areAnagrams(str1, str2){
    if(str1.length !== str2.length)return false;
    if(str1 === str2)return true;
    let index;
    while(str1.length > 0){
        if((index = str1.indexOf(str2[0])) == -1)return false;
        str1 = str1.replace(str2[0], '');
        str2 = str2.replace(str2[0], '');
    }
    return true;
}

let strs = ["", ""];
console.log(groupAnagrams(strs));
// [["bat"],["nat","tan"],["ate","eat","tea"]]