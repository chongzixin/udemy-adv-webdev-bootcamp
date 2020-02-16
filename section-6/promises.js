// 1
// ===========================

var p1 = new Promise(function(resolve, reject) {
    var num = Math.random();
    if(num < 0.5) resolve(num);
    else reject(num);
});

p1.then(function(result) {
    console.log("Success: " + result);
}).catch(function(result) {
    console.log("Error: " + result);
});

// 2
// ===========================
// putting async code in
// this shows the power of promise because setTimeout is run after all the code has finished, which means we won't have been able to print to the console. Promises allowed for that
var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        var randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 4000);
});

promise.then(function(data) {
    console.log("Random int passed to resolve: " + data);
});