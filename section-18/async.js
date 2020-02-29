const axios = require("axios");

async function hasMostFollowers() {
    const userPromises = [...arguments].map(user => axios.get(`https://api.github.com/users/${user}`).then(response => response.data));
    const users = await Promise.all(userPromises);
    const user = users.sort((a,b) => b.followers - a.followers)[0];
    return `${user.name} has the most followers with ${user.followers}`;
}

hasMostFollowers("elie", "tigarcia", "colt").then(function(data) {
    console.log(data);
});

async function starWarsString(number) {
    let url = `https://swapi.co/api/people/${number}`;

    let character = await axios.get(url).then(response => response.data);
    let film = await axios.get(character.films[0]).then(response => response.data);
    let planet = await axios.get(character.homeworld).then(response => response.data);
    return `${character.name} of ${planet.name} is featured in ${film.title}`;
}

starWarsString(1).then(function (data) {
    console.log(data);
})