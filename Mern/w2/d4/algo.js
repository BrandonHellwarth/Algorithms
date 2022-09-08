/**
 * From a Chipotle interview.
 * encodeStr algo was also given in this interview (aaabbcdd => a3b2cd2).
 *
 * It ain't much, but it's honest work. A worker who measures water level
 * fluctuations in a river is asked to find the largest fluctuation in water
 * levels during a day, but only for rises in water levels.
 */

const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [15, 17, 30, 20, 50, 16, 25, 9, 3];
const expected3 = 30; // 50 - 20 = 30

const riverLevels4 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected4 = 11; // 12 - 1 = 11

const riverLevels5 = [1, 5];
const expected5 = 4;

const riverLevels6 = [5, 1];
const expected6 = -1;

const riverLevels7 = [9, 7, 7, 7];
const expected7 = -1;

const riverLevels8 = [42];
const expected8 = -1;

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

console.log(measureWaterLevels(riverLevels4));