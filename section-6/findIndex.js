function findIndex(arr, callback) {
    for(let i=0; i<arr.length; i++) {
        let result = callback(arr[i], i, arr);
        if(result) return i;
    }
    return -1;
}

// var arr = [5,11,13,8,6,7];
// let result = findIndex(arr, function(num, index, array) {
//     return num % 2 === 0;
// });

var langs = ["Java", "C++", "Python", "Ruby"];
let result = findIndex(langs, function(lang, index, arr) {
    return lang === "JavaScript";
});

console.log(result);