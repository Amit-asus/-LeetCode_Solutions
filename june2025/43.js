// 43. Multiply Strings
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"
 

// Constraints:

// 1 <= num1.length, num2.length <= 200
// num1 and num2 consist of digits only.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 == '0' ||  num2 == '0') return "0" ;
    const result = new Array(num1.length + num2.length).fill(0) ;

    for(let i = num1.length - 1 ; i  >= 0 ; i--){
     for(let j = num2.length - 1 ; j  >= 0 ; j--){
              let pro = ( num1[i]- '0') * (num2[j] - '0') ;
              let p1 = i+j ; 
              let p2 = i+j+1 ;
              const sum = pro + result[p2] ;
              result[p2] =  sum%10 ;
              result[p1] += Math.floor(sum /10) ;

       }
    }
    
    let resultStr = result.join('').replace(/^0+/ ,'') ;
    return resultStr.length  ?  resultStr : '0' ;
    
};