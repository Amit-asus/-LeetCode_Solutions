
// 387. First Unique Character in a String
// Solved
// Easy
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// Example 3:

// Input: s = "aabb"

// Output: -1


function FindUniqueChar(s){
    const map = new Map() ;
    for (c of s)
    {
        map.set(c, (map.get(c)|| 0) +1) ;
    }

    for(let [key,value] of map)
    {
        if(value == 1){
            return s.indexOf(key) ;
        }
    }
    return -1  ;

}

console.log(FindUniqueChar("leetcode"));