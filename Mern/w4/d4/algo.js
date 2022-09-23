/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.
See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

// const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const expected1 = 49;
// // Explanation: heights1[1] and heights1[8] as container edges.
// // Length = 8 - 1. Height = 7

// const heights2 = [1, 1];
// const expected2 = 1;

// const heights3 = [4, 3, 2, 1, 4];
// const expected3 = 16;

// const heights4 = [1, 2, 1];
// const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {

}

/* 
Given two strings, version1, and version2, both representing version numbers
If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.
Helpful methods:
- .split(characterToSplitOn)
    - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
- .parseInt
    - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
Bonus, solve without .split
*/

const test1V1 = '0.1';
const test1V2 = '1.1';
const expected1 = -1;

const test2V1 = '1.0.1';
const test2V2 = '1';
const expected2 = 1;

const test3V1 = '7.5.2.4';
const test3V2 = '7.5.3';
const expected3 = -1;

const test4V1 = '7.5.2.4';
const test4V2 = '7.5.2';
const expected4 = 1;

const test5V1 = '1.01';
const test5V2 = '1.001';
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = '1.0.1';
const test6V2 = '1';
const expected6 = 1;

/**
 * Determines which version number is greater or if they are equal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
 */
function compareVersionNumbers(v1, v2) {
    let v1Arr = [];
    let v2Arr = [];
    let ArrIndex = 0;
    //breaks down v1 into an array of strings where each string is all of the numbers on one side of a decimal point
    for(let i=0;i<v1.length;i++){
        if(v1[i] != "."){
            v1Arr.push('');
            for(let j=i;j<=v1.length;j++){
                if(v1[j] === "." || j === v1.length){
                    i = j;
                    ArrIndex++;
                    break;
                }
                v1Arr[ArrIndex] += v1[j].toString();
            }
        }
    }
    //breaks down v2 into an array of strings where each string is all of the numbers on one side of a decimal point
    ArrIndex = 0;
    for(let i=0; i<v2.length;i++){
        if(v2[i] != "."){
            v2Arr.push('');
            for(let j=i;j<=v2.length;j++){
                if(v2[j] === "." || j === v2.length){
                    i = j;
                    ArrIndex++;
                    break;
                }
                v2Arr[ArrIndex] += v2[j].toString();
            }
        }
    }
    //for loop runs through the larger array and compares v1Arr to v2Arr at the same index
    //if one arrays index is greater than the other, or the other is undefined return either 1 or -1
    //if all values match return 0
    if(v1Arr.length > v2Arr.length){
        for(let i=0;i<v1Arr.length;i++){
            if(parseInt(v1Arr[i]) > parseInt(v2Arr[i]) || v2Arr[i] === undefined){
                return 1;
            }
            else if(parseInt(v2Arr[i]) > parseInt(v1Arr[i]) || v1Arr[i] === undefined){
                return -1;
            }
        }
        return 0;
    }
    else{
        for(let i=0;i<v2Arr.length;i++){
            if(parseInt(v1Arr[i]) > parseInt(v2Arr[i]) || v2Arr[i] === undefined){
                return 1;
            }
            else if(parseInt(v2Arr[i]) > parseInt(v1Arr[i]) || v1Arr[i] === undefined){
                return -1;
            }
        }
        return 0;
    }
}

console.log(compareVersionNumbers(test1V1, test1V2));