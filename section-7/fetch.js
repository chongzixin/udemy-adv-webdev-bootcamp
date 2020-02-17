const fetch = require("node-fetch");

// var url = "https://api.github.com/users/chongzixin";
var url = "https://randomuser.me/api/";

fetch(url)
.then(handleErrors)
.then(parseJSON)
.then(updateProfile)
.catch(printError);

function handleErrors(response) {
    if(!response.ok) throw Error(response.status);
    else return response;
}

function parseJSON(response) {
    return response.json().then(function (data) { return data.results[0] });
}

function updateProfile(data) {
    console.log(data);
}

function printError(error) {
    console.log(error);
}

// using arrow functions
// fetch(url)
// .then(response => response.json())
// .then(body => console.log(body));