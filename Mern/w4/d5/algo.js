/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
Ignore case
.indexOf will only tell you if the letter is found one time
*/

const strA1 = 'Hello World';
const strB1 = 'lloeh wordl';
const expected1 = true;

const strA2 = 'Hey';
const strB2 = 'hello';
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = 'hello';
const strB3 = 'helo';
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = 'hello';
const strB4 = 'lllheo';
const expected4 = true;

const strA5 = 'hello';
const strB5 = 'heloxyz';
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function canBuildS1FromS2(s1, s2) {
    s2Arr = s2.split('');
loop1: //runs through each character of s1
    for(let i=0;i<s1.length;i++){
        //compares our current s1 index to each character in s2
        //if a match is found then we remove the found character from s2 and continue loop1
        for(let j=0;j<s2Arr.length;j++){
            if(s1[i] === s2Arr[j].toLowerCase() || s1[i] === s2Arr[j].toUpperCase()){
                s2Arr.splice(j, 1);
                continue loop1;
            }
        }
        //if no match is found return false
        return false;
    }
    //if every character matches return true
    return true;
}

console.log(canBuildS1FromS2(strA5, strB5));