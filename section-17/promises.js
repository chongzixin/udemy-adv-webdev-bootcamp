const axios = require("axios");

function getMostFollowers() {
    let baseUrl = "https://api.github.com/users/"
    let userPromises = [...arguments].map(username => {
        return axios.get(baseUrl + username).then(response => response.data);
    });
    return Promise.all(userPromises).then(users => {
        let max_follower_user = { name: "", followers: 0};
        for(const user of users) {
            if(user.followers > max_follower_user.followers) {
                max_follower_user = user;
            }
        }

        // ALTERNATIVE
        // let max_follower_user = users.sort((a,b) => a.followers > b.followers)[0];

        return `${max_follower_user.name} has the most followers with ${max_follower_user.followers}`;
    });
}

getMostFollowers('elie', 'tigarcia', 'colt').then(function (data) {
    console.log(data);
});

function starWarsString(number) {
    let url = `https://swapi.co/api/people/${number}`;

    let characterPromise = axios.get(url);
    let filmPromise = characterPromise.then(response => axios.get(response.data.films[0]));
    let planetPromise = characterPromise.then(response => axios.get(response.data.homeworld));
    return Promise.all([characterPromise, filmPromise, planetPromise]).then(responseArr => {
        let name, title, planet;
        for(const response of responseArr) {
            let requestUrl = response.config.url;
            if(requestUrl.includes("people")) name = response.data.name;
            else if(requestUrl.includes("films")) title = response.data.title;
            else if(requestUrl.includes("planets")) planet = response.data.name;
        }
        return `${name} of ${planet} is featured in ${title}`;
    });

    // alternative is to use declare global variable with var str; then concatenate accordingly from each promise item
}

starWarsString(1).then(function (data) {
    console.log(data);
})