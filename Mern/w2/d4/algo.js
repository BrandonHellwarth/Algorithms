/**
 * From a Chipotle interview.
 * encodeStr algo was also given in this interview (aaabbcdd => a3b2cd2).
 *
 * It ain't much, but it's honest work. A worker who measures water level
 * fluctuations in a river is asked to find the largest fluctuation in water
 * levels during a day, but only for rises in water levels.
 */

// const riverLevels1 = [15, 17, 30];
// const expected1 = 15; // 30 - 15 = 15

// const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
// const expected2 = 20; // 25 - 5 = 20

// const riverLevels3 = [15, 17, 30, 20, 50, 16, 25, 9, 3];
// const expected3 = 30; // 50 - 20 = 30

// const riverLevels4 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
// const expected4 = 11; // 12 - 1 = 11

// const riverLevels5 = [1, 5];
// const expected5 = 4;

// const riverLevels6 = [5, 1];
// const expected6 = -1;

// const riverLevels7 = [9, 7, 7, 7];
// const expected7 = -1;

// const riverLevels8 = [42];
// const expected8 = -1;

/**
  * It ain't much, but it's honest work. A worker who measures water level
  * fluctuations in a river is asked to find the largest fluctuation in water
  * levels during a day, but only for rises in water levels.
  * - Time: O(?).
  * - Space: O(?).
  * @param {Array<number>} waterLevels Non-empty .
  * @returns {number} The max water-level rise amount or -1 if none.
  */
function measureWaterLevels(waterLevels) {
    var rises = [];
    var i = 0;
    var j = 0;
    if(waterLevels.length === 1){
        return -1;
    }
    while(i < waterLevels.length){
        if(i === waterLevels.length - 1){
            if(waterLevels[i] > waterLevels[i-1]){
                i++;
                break;
            }
            i++;
            break;
        }
        if(waterLevels[i] < waterLevels[i+1]){
            rises.push([]);
            rises[j].push(waterLevels[i]);
            i++;
            for(i;i<waterLevels.length;i++){
                if(i === waterLevels.length - 1){
                    if(waterLevels[i] > waterLevels[i-1]){
                        rises[j].push(waterLevels[i]);
                        break;
                    }
                    break;
                }
                if(waterLevels[i] > waterLevels[i-1]){
                    rises[j].push(waterLevels[i]);
                }
                else{
                    j++;
                    break;
                }
            }
        }
        else{
            i++;
        }
    }
    if(rises.length === 0){
        return -1;
    }
    var differences = [];
    for(var k=0;k<rises.length;k++){
        differences.push(rises[k][rises[k].length-1] - rises[k][0]); 
    }
    var greatest = 0;
    for(var k=0;k<differences.length;k++){
        if(differences[k] > greatest){
            greatest = differences[k];
        }
    }
    return greatest;
}

// console.log(measureWaterLevels(riverLevels4));



/*
Given two arrays of ints
return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
    think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
    
    Venn Diagram Visualization:
    - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

const setA1 = [1, 2];
const setB1 = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const setA2 = [1, 2, 3];
const setB2 = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const setA3 = [4, 1, 2, 3, 4];
const setB3 = [1, 2, 3, 5, 5];
const expected3 = [4, 5];
/* 
    Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array, but have duplicates, so only one copy of each is kept
*/

const setA4 = [];
const setB4 = [];
const expected4 = [];

const setA5 = [];
const setB5 = [1, 2, 3];
const expected5 = [1, 2, 3];

/**
 * Produces the symmetric differences, aka disjunctive union of two sets.
 * Venn Diagram Visualization:
 * @see https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
 * - Time: O(?).
 * - Space: O(?).
 * @param  {Array<number>} numsA
 * @param  {Array<number>} numsB
 *    Both given sets are multisets in any order (contain dupes).
 * @returns {Array<number>} The union of the given sets but excluding the shared
 *    values (union without intersection).
 *    i.e., if the element is in one array and NOT the other, it should be
 *    included in the return.
 */
function symmetricDifferences(numsA, numsB) {
    var newArr = [];
loop1:
    for(var i=0;i<numsA.length;i++){
        for(var j=0;j<numsB.length;j++){
            if(numsA[i] == numsB[j]){
                continue loop1;
            }
        }
        if(!newArr.includes(numsA[i])){
            newArr.push(numsA[i]);
        }
    }
loop2:
    for(var i=0;i<numsB.length;i++){
        for(var j=0;j<numsA.length;j++){
            if(numsB[i] == numsA[j]){
                continue loop2;
            }
        }
        if(!newArr.includes(numsB[i])){
            newArr.push(numsB[i]);
        }
    }
    return newArr;
}
console.log(symmetricDifferences(setA5, setB5));