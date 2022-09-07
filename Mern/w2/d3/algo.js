// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
Given a square matrix (2d array) of integers
Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */

/**
   * Calculates the absolute diagonal difference of a square matrix.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
   *    a square matrix (rows and columns).
   * @returns {number} Represents the absolute difference between the top left to
   *    bottom right diagonal and the top right to bottom left diagonal.
   */
function diagonalDifference(sqrMatrix) {
    var leftToRight = 0;
    var rightToLeft = 0;
    var j = sqrMatrix.length - 1;
    for(var i=0;i<sqrMatrix.length;i++){
        leftToRight = leftToRight + sqrMatrix[i][i];
        rightToLeft = rightToLeft + sqrMatrix[j][i];
        j--;
    }
    if(leftToRight > rightToLeft){
        return leftToRight - rightToLeft;
    }
    return rightToLeft - leftToRight;
}

// console.log(diagonalDifference(squareMatrix1));


/* 
Union Sorted Arrays
Efficiently combine two already-sorted multiset arrays
into a new sorted array containing the multiset union.
Unions by default will take the set of dupes
that has the highest occurrences from one array.
Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const nums1A = [1, 2, 2, 2, 7];
const nums1B = [2, 2, 6, 6, 7];
const expected = [1, 2, 2, 2, 6, 6, 7];

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
const expected6 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

const nums3A = [];
const nums3B = [2, 2, 3, 3, 3];
const expected3 = [2, 2, 3, 3, 3];

const nums4A = [2, 2, 3, 3, 3];
const nums4B = [];
const expected4 = [2, 2, 3, 3, 3];

const nums5A = [];
const nums5B = [];
const expected5 = [];
/* 
Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {
    //checking for duplicates and if so, which array has more of said duplicate
    //if sortedB has more of said duplicate than sortedA, splices all values equal to said duplicate inside of sortedA 
    //Then inserts new count of said dup from sortedB at the index we spliced from in sortedA
    var dups = [];
    for(var i=0;i<sortedB.length;i++){
        if(dups.includes(sortedB[i])){
            continue;
        }
        for(var j=0;j<sortedA.length;j++){
            if(dups.includes(sortedA[j])){
                continue;
            }
            if(sortedB[i] == sortedA[j]){
                dups.push(sortedB[i]);
                var dupsA = 0;
                var dupsB = 0;
                for(var k=0;k<sortedA.length;k++){
                    if(sortedA[k] == sortedB[i]){
                        dupsA++;
                    }
                }
                for(var k=0;k<sortedB.length;k++){
                    if(sortedB[k] == sortedB[i]){
                        dupsB++;
                    }
                }
                if(dupsA < dupsB){
                    sortedA.splice(j, dupsA);
                    for(var k=0;k<dupsB;k++){
                        sortedA.splice(j, 0, sortedB[i]);
                    }
                }
            }
        }
    }
    var added = [];
    for(var i=0;i<sortedB.length;i++){
        if(dups.includes(sortedB[i]) || added.includes(sortedB[i])){
            continue;
        }
        added.push(sortedB[i]);
        var count = 0;
        for(var j=0;j<sortedB.length;j++){
            if(sortedB[i] == sortedB[j]){
                count++;
            }
        }
        var found = false;
        for(var j=0;j<sortedA.length;j++){
            if(sortedB[i] < sortedA[j]){
                found = true;
                for(var k=0;k<count;k++){
                    sortedA.splice(j, 0, sortedB[i]);
                    j++;
                }
                break;
            }
        }
        if(!found){
            for(var j=0;j<count;j++){
                sortedA.push(sortedB[i]);
            }
        }
    }
    return sortedA;
}

console.log(orderedMultisetUnion(nums5A, nums5B));