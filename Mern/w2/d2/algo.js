/* 
Efficiently combine two already sorted multiset arrays 
into an array containing the sorted set intersection of the two.

Output: only the shared values between the two arrays (deduped).
Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    //pushes all common values to a new array
    var commonVals = [];
    for(var i=0;i<sortedA.length;i++){
        var found = false;
        for(var j=0;j<commonVals.length;j++){
            if(sortedA[i] == commonVals[j]){
                found = true;
                break;
            }
        }
        //if the value at sortedA[i] has already been added to common vals we continue
        if(found) continue;
        //if the value at sortedA[i] has not already been added to commonVals-
        //-checks to see if sortedB has an equal value, if true then we push the shared value to commonVals
        for(var j=0;j<sortedB.length;j++){
            if(sortedA[i] == sortedB[j]){
                commonVals.push(sortedB[j]);
                break;
            }
        }
    }
    //finds the first value of sortedA that is greater than or equal too the last value of sortedB
    //then splices each value in sortedB into sortedA after the found index
    for(var i=0;i<sortedA.length;i++){
        var notFound = true;
        if(sortedA[i] >= sortedB[sortedB.length-1]){
            notFound = false;
            for(var j=0;j<sortedB.length;j++){
                sortedA.splice(i, 0, sortedB[j]);
                i++;
            }
            break;
        }    
    }
    //if no such value is found then each value from sortedB is pushed to sortedA
    if(notFound){
        for(var j=0;j<sortedB.length;j++){
            sortedA.push(sortedB[j]);
        }
    }

    console.log(sortedA);
    return commonVals;
}
console.log(orderedIntersection(numsA3, numsB3));