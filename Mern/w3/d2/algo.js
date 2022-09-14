/* 
Given a search criteria object whose values will only be
primitives (ints, strings, booleans) and a list of objects.
return any object that matches all the key value pairs in the search
criteria object.

Bonus: write a 2nd solution using built in methods to practice functional
programming.
*/

const items = [
    { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
    { firstName: 'John', lastName: 'Smith', age: 25 },
    { firstName: 'Bob', lastName: 'Smith', age: 27 },
    { firstName: 'Bob', lastName: 'White', age: 31 },
];

const searchCriteria1 = {
    firstName: 'Bob',
    age: 31,
};
const expected1 = [
    { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
    { firstName: 'Bob', lastName: 'White', age: 31 },
];

const searchCriteria2 = {
    lastName: 'Smith',
};
const expected2 = [
    { firstName: 'John', lastName: 'Smith', age: 25 },
    { firstName: 'Bob', lastName: 'Smith', age: 27 },
];

/**
   * Finds the objects that match the given search criteria.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Object} criteria
   * @param {Array<Object>} collection
   * @returns {Array<Object>} The found objects.
   */
function findObjects(criteria, collection) {
    let keys = [];
    let values = [];
    let output = [];
    //populates two arrays with the keys and values of criteria
    for(let value in criteria){
        keys.push(value);
        values.push(criteria[value]);
    }
/*
loop that runs through every item in collection and checks if the value of that
item[at our first key] in the keys array we just made is equal to our first value
in the values array(just created). If true then a for loop is run to compare the
rest of the items values to the values from search criteria. If they all match then
we push the current item to the output array, otherwise continue loop1.
*/
    let i = 0;
loop1:
    for(let item in collection){
        if(collection[item][keys[i]] === values[i]){
            for(var j=i+1;j<keys.length;j++){
                if(collection[item][keys[j]] != values[j]){
                    continue loop1;
                }
            }
            output.push(collection[item]);
        }
    }
    return output;
}

// console.log(findObjects(searchCriteria2, items));

/**
   * - Time: O(?).
   * - Space: O(?).
   */
const findObjectsFunctional = (criteria, collection) =>
    collection.filter((item) =>
    Object.keys(criteria).every((key) => item[key] === criteria[key])
);
console.log(findObjectsFunctional(searchCriteria1, items));