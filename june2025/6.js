// leetcode 6. Zigzag Conversion
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if( numRows == 1 || s.length < numRows)
    {
        return s  ;
    }

    let  goingDown = false ;
    const result = new Array(numRows).fill('') ;
    let currRow = 0 ;
    for(let ch  of s ){
       result[currRow] +=  ch ;

       if(currRow == 0 || currRow == numRows -1 )
       {
         goingDown = !goingDown ;
       }

      currRow += goingDown ? 1 : -1 ;

    }

    return (result.join('')) ;

};
