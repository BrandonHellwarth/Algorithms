/* 
Given by Riot games.
*/

// const str1 = 'b70a164c32a20c10';
// const expected1 = 'a184b70c42';

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}

function rehash(s) {
    let newObj = {};
    for(let i=0;i<s.length;i++){
        if(isLetter(s.charAt(i))){
            let j = i+1;
            let num = "";
            while(!isLetter(s.charAt(j))){
                num = num + s.charAt(j);
                j++;
                if(j === s.length){
                    break;
                }
            }
            if(s.charAt(i) in newObj){
                newObj[s.charAt(i)] = newObj[s.charAt(i)] + parseInt(num);
            }
            else{
                newObj[s.charAt(i)] = parseInt(num);
            }
        }
    }
    let sortedKeys = Object.keys(newObj).sort();
    let output = "";
    for(let i=0;i<sortedKeys.length;i++){
        output += sortedKeys[i];
        output += newObj[sortedKeys[i]].toString();
    }
    return output;
}

// console.log(rehash(str1));

/* 
Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = 'abcabcbb';
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = 'bbbbb';
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = 'pwwkew';
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = 'dvadf';
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {
    let newArr = [];
    let subStr = str.charAt(0);
    for(let i=1;i<str.length;i++){
        let found = false;
        for(let j=subStr.length-1;j>=0;j--){
            if(str.charAt(i) === subStr.charAt(j)){
                found = true;
                break;
            }
        }
        if(!found){
            subStr += str.charAt(i);
        }
        else{
            newArr.push(subStr);
            subStr = str.charAt(i);
            if(i === str.length-1){
                newArr.push(subStr);
            }
        }
    }
    let greatest = 0;
    for(let i=0;i<newArr.length;i++){
        if(newArr[i].length > greatest){
            greatest = newArr[i].length;
        }
    }
    return greatest;
}

console.log(lengthOfLongestSubString(str4));