/* 
Given an array of objects, a searchFor string, and searchBy key that exists
in the object return a new array of only those objects whose value for the
given key starts with the given search string.
You can assume the key will exist on the object and the value of that key
will be a string.
Bonus: make the search case insensitive.
Bonus: re-write it with functional programming, using built in methods.
Bonus: allow the search method to be provided as a parameter, e.g.,
    string methods: includes, startsWith, endsWith.
    - you can assume the searchMethod will be valid.
This kind of algorithm can be used in react onChange as you type into a
search bar to live-filter a list.
*/

const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
    },
    {
        firstName: 'Eddy',
        lastName: 'Lee',
    },
    {
        firstName: 'John',
        lastName: 'Fawn',
    },
    {
        firstName: 'Edward',
        lastName: 'Kim',
    },
];

const searchFor1 = 'Jo';
const searchBy1 = 'firstName';
const expected1 = [
    {
        firstName: 'John',
        lastName: 'Doe',
    },
    {
        firstName: 'John',
        lastName: 'Fawn',
    },
];

const searchFor2 = 'ohn';
const searchBy2 = 'firstName';
const expected2 = [];
  // Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = 'Do';
const searchBy3 = 'lastName';
const expected3 = [
    {
        firstName: 'John',
        lastName: 'Doe',
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
    },
];

  // Bonus
const searchFor4 = 'E';
const searchBy4 = 'lastName';
const searchMethod4 = 'includes';
const expected4 = [
    {
        firstName: 'John',
        lastName: 'Doe',
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
    },
    {
        firstName: 'Eddy',
        lastName: 'Lee',
    },
];

/**
   * Filters the given items based on the search criteria using a startsWith
   * search method.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<Object>} items The items to be filtered.
   * @param {string} searchFor The value of the given key to search for.
   * @param {string} searchBy The key to search by.
   * @returns {Array<Objects>} The matched items.
   */
function FilterByKey(items, searchFor, searchBy, searchMethod) {
    let output = [];
    //splits searchFor into an array of its characters
    let searchVal = searchFor.split('');
    //main loop that runs through all objects in our items
loop1:
    for(let i in items){
        //splits the value we are currently comparing into an array of its characters
        let value = items[i][searchBy].split('');
        if(searchMethod === "startsWith"){
            /*checks each searchVal character with the corresponding index of the value
            characters. If any do not match then we continue the main loop, otherwise
            we push the current object to output and continue*/
            for(let j=0;j<searchVal.length;j++){
                if(value[j] != searchVal[j]
                    && value[j] != searchVal[j].toLowerCase()
                    && value[j] != searchVal[j].toUpperCase()){
                    continue loop1;
                }
            }
        }
        else if(searchMethod === "includes"){
            /*runs until it finds a value that mathces the first character of our
            serachVal. If not found then continue loop1. Then if searchVal is only
            1 character we push our current object and continue. If searchVal is more
            than 1 character, we check the next character in our value to see if it
            corresponds to the next character in our searchVal. If they all match then we
            push to output and continue loop 1. If not then we run loop 2 again incase our
            value has our search value starting at another index.*/
loop2:
            for(let j=0;j<value.length;j++){
                if(value[j] === searchVal[0]
                    || value[j] === searchVal[0].toLowerCase()
                    || value[j] === searchVal[0].toUpperCase()){
                        if(searchVal.length === 1){
                        output.push(items[i]);
                        continue loop1;
                        }
                        else{
                            for(let k=1;k<searchVal.length;k++){
                                if(value[j+k] != searchVal[k]){
                                    continue loop2;
                                }
                            }
                            output.push(items[i]);
                            continue loop1;
                        }
                    }
            }
            continue loop1;
        }
        else if(searchMethod === "endsWith"){
            /* Starts at the difference in length between our value and our serachVal
            and checks to see if the corresponding values match. similar to startsWith
            */
            for(let j=value.length-searchVal.length, k=0;j<value.length;j++,k++){
                if(value[j] != searchVal[k]
                    && value[j] != searchVal[k].toLowerCase()
                    && value[j] != searchVal[k].toUpperCase()){
                    continue loop1;
                }
            }
        }
        else{
            return "Invalid search method.";
        }
        output.push(items[i]);
    }
    return output;
}

console.log(FilterByKey(people, "d", searchBy1, "includes"));