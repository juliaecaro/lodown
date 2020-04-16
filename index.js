'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Returns the given value unchanged.
 * 
 * @param {Value} value: Input value can be any datatype. 
 * 
 * @return {Value}: The value returned will be the same as the input value unaltered.
 * 
 */

function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Takes any value and defines the data type.
 * 
 * @param {Value} value: Input value can be any datatype.
 * 
 * @return {String}: Returns a string with the data type.
 */
 
function typeOf(value) { // Calling the _ array and giving it the function name of typeOf, and 
// assigning it to a function keyword that takes in the parameter of value
    if (typeof value === "string") { // If statement; if the type of value is strictly equal to
    // string, this code should run
        return "string"; // Should return "string"
    } else if (Array.isArray(value) === true) { // Else if statement; if the value is an array, this 
    // code should run
        return "array"; // Should return "array"
    } else if (typeof value === "undefined") { // Else if statement; if the type of value is strictly
    // equal to "undefined", this code should run
        return "undefined"; // Return "undefined"
    } else if (typeof value === "number") { // Else if statement; if the type of value is strictly equal
    // to "number", this code should run
        return "number"; // Return "number"
    } else if (typeof value === "boolean") { // Else if statement; if the type of value is strictly equal
    // to "boolean", this code should run
        return "boolean"; // Return "boolean"
    } else if (value === null) { // Else if statement; if the type of value is strictly equal to null,
    // this code should run
        return "null"; // Return null
    } else if (typeof value === "function") { // Else if statement; if the type of value is strictly equal
    // to "function", this code should run
        return "function"; // Return "function"
    } else if (typeof value === "object") { // Else if statement; if the type of value is strictly equal to
    // "object", this code should run
        return "object"; // Return "object"
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Designed to determine the datatype of an array or number, and designed
 * to loop over a collection, Array, to determine the first <number> items of array
 * 
 * @param {Array} array: The collection over which to iterate.
 * @param {Number} number: The number to be used as the stopping condition within
 * the for loop.
 * 
 * @return {Array}: returns an array filled with the elements of the original array
 */

function first(array, number) { // Calling the _ array and giving it the function name of first, and
// assigning it to a function keyword that takes in an array and a number as the parameters
    let myArray = []; // Declaring a new variable called myArray and assigning it to an empty array
    
    if (Array.isArray(array) === false) { // If statement; if array is not an array, run this code
        return []; // Return an empty array
    } else if (typeof number !== "number") { // Else if statement; if the type of number is not strictly
    // equal to "number", run this code
        return array[0]; // Return the first index of array's array
    } else if (number < 0) { // Else if statement; if number is less than 0, run this code
        return []; // Return an empty array
    } else if (number > array.length) { // Else if statement; if number is greater than array.length, 
    // run this code
        return array; // Return the value of array
    } else { // Else statement; needs no conditional, run this code if all others fail
        for (let i = 0; i < number; i++){ // For loop; starting condition is 0, stopping condition is i
        // is less than number, and the increment is plus 1.
            myArray.push(array[i]); // Push the index of array into myArray
        }
        return myArray; // Return myArray
            }
        }
module.exports.first = first;

/**
 * last: Designed to determine the datatype of an array or number, and designed
 * to loop over a collection, Array, to determine the last <number> items of array
 * 
 * @param {Array} array: The collection over which to iterate.
 * @param {Number} number: The number to be used as the stopping condition within
 * the for loop.
 * 
 * @return {Array}: returns an array filled with the elements of the original array
 */
 
function last(array, number) { // Calling the _ array and giving it the function name of last, and
// assigning it to a function keyword that takes in an array and a number as the parameters
    let myArray = []; // Declaring a new variable called myArray and assigning it to an empty array
    
    if (Array.isArray(array) === false) { // If statement; if array is not an array, run this code
        return []; // Return an empty array
    } else if (typeof number !== "number") { // Else if statement; if the type of number is not strictly
    // equal to "number", run this code
        return array[array.length - 1]; // Return the last index of array's array
    } else if (number < 0) { // Else if statement; if number is less than 0, run this code
        return []; // Return an empty array
    } else if (number > array.length) { // Else if statement; if number is greater than array.length, 
    // run this code
        return array; // Return the value of array
    } else { // Else statement; needs no conditional, run this code if all others fail
        for (let i = 1; i <= number; i++){ // For loop; starting condition is 1, stopping condition is i
        // is less than or equal to number, and the increment is plus 1.
            myArray.push(array[i]); // Push the index of array into myArray
        }
        return myArray; // Return myArray
            }
        }
module.exports.last = last;

/**
 * indexOf: Designed to loop over a collection, Array, and determine the index of
 * <array> that is the first occurance of <value>.
 * 
 * @param {Array} array: the collection over which to iterate.
 * @param {Value} value: input value can be any data type.
 * 
 * @return {Number}: returns a number of the index value.
 */
 
function indexOf(array, value) { // Calling the _ array and giving it the function name 
// of indexOf. Then, we assign it to the function keyword that takes in an array and a value
// as the parameters
    for (let i = 0; i < array.length; i++) { // For loop; starting condition is i equals 0, 
    // stopping condition is i is less than the array length, and the increment is plus 1
        if (array[i] === value) { // If statement; if the index of array is strictly equal to
        // value, this code will run
            return i; // Return the index
        }
    } return -1; // Return negative 1.
}
module.exports.indexOf = indexOf;

/**
 * contains: Designed to loop over a collection, Array, and determine if the index of array
 * equals value.
 * 
 * @param {Array} array: the collection over which to iterate.
 * @param {Value} value: input value can be any data type.
 * 
 * @return {Boolean}: returns true or false.
 */
 
function contains(array, value) { // Calling the _ array and giving it the function name
// of contains. Then, we assign it to the function keyword that takes in an array and a value as 
// the parameters
    for (let i = 0; i < array.length; i++) { // For loop; the starting condition is i equals 0, 
// the stopping condition is i is less than the length of array, and the increment is plus 1.
        if (array[i] === value) { // If the index of array is strictly equal to value, this code
        // should run
            return true; // Return true;
        }
    } return false; // Return false if the loop did not return true.
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * func Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 */
function each(collection, func) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Designed to loop over a collection, an Array, and remove the duplicates
 * 
 * @param {Array} array: the collection over which to iterate.
 * 
 * @return {Array}: Returns a new array of all elements from the original array,
 * with duplicates removed
 */

function unique(array) {
    var myNewArray = []; // Declaring a new array called myNewArray and assigning it to an empty array.
    
    for (var i = 0; i <= array.length - 1; i++){ // Declaring a new for loop; starting condition is i 
    // equals 0, stopping condition is i is less than or equal to the length of array minus 1, and the
    // increment is plus 1.
        if(indexOf(array, array[i]) === i) { // If statement; if the indexOf array value as array and 
        // array[i] as the value is strictly equal to index of i, this code should run
            myNewArray.push(array[i]); // Push the index of array into myNewArray
        }
    }
    return myNewArray; // Return myNewArray
}
module.exports.unique = unique;

/**
 * filter: Designed to loop over a collection, an Array, and applies the func
 * Function to each value in the collection, returning a new array from a function
 * call equating to true.
 * 
 * @param {Array} array: the collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * array.
 * 
 * @return {Array}: returns an array filled with the elements from the original 
 * array that returned true during the function call
 */
 
function filter(array, func) {
    var myNewestArray = []; // Declaring a new variable called myNewestArray and assigning it to
    // an empty array
        
    for (var i = 0; i <= array.length - 1; i++) { // For loop; starting condition is i is equal to 0,
    // stopping condition is i is less than or equal to the length of array minus 1, and the increment
    // is plus 1
        if(func(array[i], i, array) === true) { // If statement; if the function call for each element in
        // array equals true, run this code
            myNewestArray.push(array[i]); // Push the index of array into myNewestArray
    }
   } return myNewestArray; // Return myNewestArray
}
module.exports.filter = filter;

/**
 * reject: Designed to loop over a collection, an Array, and applies the func
 * Function to each value in the collection, returning a new array from a function
 * call that equated to false.
 * 
 * @param {Array} array: the collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * array.
 * 
 * @return {Array}: returns an array filled with the elements from the original 
 * array that returned false during the function call
 */
 
function reject(array, func) {
    var myFourthArray = []; // Declaring a new variable called myFourthArray and assigning it to an
    // empty array
    
    for (var i = 0; i <= array.length - 1; i++) { // Declaring a for loop; starting condition is i
    // equals 0, the stopping condition is i is less than or equal to the length of array minus 1,
    // and the increment is plus 1
        if(func(array[i], i, array) !== true) { // If statement; if the function call for each element in
        // array does NOT equal true, run this code
            myFourthArray.push(array[i]); // Push the index of array into myFourthArray
        }
    } return myFourthArray; // Return myFourthArray
}
module.exports.reject = reject;

/**
 * partition: Designed to loop over a collection, an Array, and applies the func
 * Function to each value in the collection, returning two new arrays nested within
 * a third array.
 * 
 * @param {Array} array: the collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * array.
 * 
 * @return {Array}: returns an array that has two sub-arrays within it; each sub-
 * array has its elements based on whether the function returned true or false.
 */

function partition(array, func) {
    let arr1 = []; // Declaring a new array called arr1 and assigning it
    // to an empty array
    let arr2 = []; // Declaring a new array called arr2 and assigning it
    // to an empty array
    let arr3 = []; // Declaring a new array called arr3 and assigning it
    // to an empty array
    
    for (let i = 0; i < array.length; i++) { // For loop; starting condition
    // is i equals 0, stopping condition is i is less than the length of array,
    // and the increment is plus 1
        if (func(array[i], i, array) === true) { // If statement; if the function 
        // call for each element in the array does equal true, run this code
            arr1.push(array[i]); // Push the index of array into arr1
        } else if (func(array[i], i, array) === false) { // Else if statement; if 
        // the function call for each element in the array equals false, run this 
        // code
            arr2.push(array[i]); // Push the index of array into arr2
        }
    } arr3.push(arr1); // Push arr1 into arr3
    arr3.push(arr2); // Push arr2 into arr3
    return arr3; // Return arr3
}
module.exports.partition = partition;

/**
 * map: Designed to loop over a collection, Array or Object, and applies the 
 * func Function to each value in the collection. If this collection is an 
 * Object, it will loop via a for loop; if the collection is an object, it will
 * loop via a for-in loop.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * array.
 * 
 * @return {Array}: returns an array filled with the return values of the two 
 * function calls.
 */
 
function map(collection, func) {
    var arr4 = []; // Declaring a new variable called arr4 and assigning it
    // to the value of an empty array
    
    if (Array.isArray(collection) === true) { // If collection is an array equals
    // true, this code will run
        for (let i = 0; i < collection.length; i++) { // For loop; the starting
        // condition is i equals 0, the stopping condition is i is less than 
        // the length of collection, and the increment is plus 1
            let fun = func(collection[i], i, collection); // Declaring a new
            // variable called fun and assigning it to the value of the function
            // call for each element in the collection
            arr4.push(fun); // Push the fun variable into arr4
        }
    } else { // Else statement; default, needs no conditional
        for (let key in collection) { // For-in loop; let key in collection
           let fun = func(collection[key], key, collection); // Declaring a new
            // variable called fun and assigning it to the value of the function
            // call for each element in the collection
           arr4.push(fun); // Push the fun variable into arr4
        }
    } return arr4; // Return arr4
}
module.exports.map = map;

/**
 * pluck: Designed to use the map function and return the map function with 
 * the array and array element as parameters.
 * 
 * @param {Array} array: The collection over which to iterate.
 * @param {Property} property: the property of which to check every element in
 * array by.
 * 
 * @return {Array}: returns an array containing the value of property for every 
 * element in the original array
 */
 
function pluck(array, property) {  
    return map(array, function(element) { // Should return the .map function, with the 
    // input array and the function as arguments. The function argument has the element 
    // as input
        return element[property]; // Return the property of each element in the array
    });
}
module.exports.pluck = pluck;

/**
 * every: Designed to loop over a collection, an Array, and return true or false
 * based on if the return value of calling the function for every element is true
 * or false, or (if the function is not provided) if every element is true or false.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection.
 * 
 * @return {Boolean}: returns true or false.
 */
 
function every(collection, func) {
    
    if (func === undefined) { // If statement; If func is strictly equal to undefined, this code should run
        for (var i = 0; i < collection.length; i++) { // For loop; starting condition is i equals 0, 
        // stopping condition is i is less than the length of collection, and the increment is plus 1.
            if (collection[i] === false) { // If statement; if any element of collection is strictly
            // equal to false, run this code
                return false; // Return false
            } 
        } return true; // Else return true.
    } else if (Array.isArray(collection) === true) { // Else if statement; if collection is an array, this 
    // code will run
        for (var i = 0; i < collection.length; i++) { // For loop; starting condition is i = 0, 
        // the stopping condition is i is less than the length of collection, and the
        // increment is plus 1.
            if (func(collection[i], i, collection) === false)  // If statement; calling the func 
            // function; collection[i] is the element we are modifiying, the i is the index, and 
            // collection is the list. If func is strictly equal to false, this code will run
                return false; // Return false
        } return true; // Return true
    } else { // Else statement; default, needs no conditional
        for (var key in collection) { // For-in loop; run this code if the collection is an object
            if (func(collection[key], key, collection) === false) { // If statement; calling the func 
            // function; collection[key] is the value, key is the key, and collection is the list. If
            // func is strictly equal to false, this code will run
                return false; // return false
        }
} return true; // Return true.
}
}
module.exports.every = every;

/**
 * some: Designed to loop over a collection, an Array, and return true or false
 * based on if the return value of calling the function for at least one element is true
 * or false, or (if the function is not provided) if at least one element is true or false.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection.
 * 
 * @return {Boolean}: returns true or false.
 */
 
function some(collection, func) {
    if (func === undefined) { // If statement; If func is strictly equal to undefined, this code should run
        for (var i = 0; i < collection.length; i++) { // For loop; starting condition is i equals 0, 
        // stopping condition is i is less than the length of collection, and the increment is plus 1.
            if (collection[i] === true) { // If statement; if any element of collection is strictly
            // equal to true, run this code
                return true; // Return true.
            } 
        } return false; // Else return false.
    } else if (Array.isArray(collection) === true) { // Else if statement; if collection is an array, this 
    // code will run
        for (var i = 0; i < collection.length; i++) { // For loop; starting condition is i = 0, 
        // the stopping condition is i is less than the length of collection, and the
        // increment is plus 1.
            if (func(collection[i], i, collection) === true)  // If statement; calling the func 
            // function; collection[i] is the element we are modifiying, the i is the index, and 
            // collection is the list. If func is strictly equal to true, this code will run
                return true; // Return true
        } return false; // Return false
    } else { // Else statement; default, needs no conditional
        for (var key in collection) { // For-in loop; run this code if the collection is an object
            if (func(collection[key], key, collection) === true) { // If statement; calling the func 
            // function; collection[key] is the value, key is the key, and collection is the list. If
            // func is strictly equal to true, this code will run
                return true; // return true
        }
} return false; // Return false.
}
}
module.exports.some = some;

/**
 * reduce: Designed to loop over a collection, an Array, and applies the 
 * func Function to the previous result, each value in the collection, and the
 * index. 
 * 
 * @param {Array} array: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection.
 * @param {Value} seed: Input value can be any datatype.
 * 
 * @return {Function}: returns the return value of the final function call on 
 * previousResult, the element, and the index.
 */
 
function reduce(array, func, seed) {
    var previousResult = seed; // Declaring a new variable called previousResult and assigning it to seed
    
    if (previousResult === undefined) { // If statement; if previousResult is strictly equal to undefined, 
    // this code should run
        previousResult = array[0]; // Assigning previousResult to equal the first element of collection as seed 
        
        for (var i = 1; i < array.length; i++) { // For loop; starting condition is i equals 1 (to go to the
        // next element), stopping condition is i is less than the length of array, and the increment is plus 1.
            previousResult = func(previousResult, array[i], i); // Assigning previousResult to equal the function 
            // call on previousResult, the element, and the index
    } 
    } else { // Else statement; default, needs no conditional
        for (var i = 0; i < array.length; i++) { // For loop; starting condition is i equals 0, stopping condition
        // is i is less than the length of array, and the increment is plus 1.
            previousResult = func(previousResult, array[i], i); // Assigning previousResult to equal the function 
            // call on previousResult, the element, and the index
        }
    } return previousResult; // Return previousResult
}
module.exports.reduce = reduce;

/**
 * extend: Designed to copy properties, from every object from the second object
 * onwards, into the first object in the order they are passed in. 
 * 
 * @param: {Object} object1: The collection that will have every property from the
 * other objects copied into it.
 * @param: {Object} object2: The first collection to be copied from.
 * @param: {Object} ...object: The last collection to be copied from.
 * 
 * @return {Object}: returns the updated object1.
 */
 
function extend(object1, object2, ...object) { 
    Object.assign(object1, object2, ...object); // Using the Object.assign method to copy all properties from
    // the source objects to the target object (object1).
    return object1; // Should return object1.
}
module.exports.extend = extend;