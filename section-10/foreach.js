// foreach
// iterates through an array, calls callback on each value
// returns undefined

function forEach(arr, fn) {
    for(let i=0; i<arr.length; i++) {
        fn(arr[i], i, arr);
    }
    return undefined;
}

function halfValues(arr) {
    var newArr = [];
    arr.forEach(function(val) {
        newArr.push(val / 2);
    });
    return newArr;
}

var ff = halfValues([2,4,6]);

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
    var newArr = [];
    arr.forEach(function (value, index, array) {
        newArr.push(value * 2);
    });
    return newArr;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
    var newArr = [];
    arr.forEach(function (value, index, arr) {
        if (value % 2 === 0)
            newArr.push(value);
    });
    return newArr;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {
    var newArr = [];
    arr.forEach(function (value, index, arr) {
        var str = value.charAt(0) + value.charAt(value.length - 1);
        newArr.push(str);
    });
    return newArr;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value) {
    // var newArr = [];
    // arr.forEach(function (val) {
    //     var obj = {};
    //     Object.assign(obj, val);
    //     obj[key] = value;
    //     newArr.push(obj);
    // });
    // return newArr;
    
    // much shorter way to achieve the above
    arr.forEach(function(val) {
        val[key] = value;
    });
    console.log(arr);
    return arr;
}
addKeyAndValue([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'title', 'instructor');

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var counts = {};
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        var charToCompare = str.charAt(i);
        if (vowels.includes(charToCompare)) {
            if (charToCompare in counts)
                counts[charToCompare]++;
            else
                counts[charToCompare] = 1;
        }
    }
    return counts;
}
