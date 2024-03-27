const { users, email, thoughts, reactions } = require('./data');

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get a random integer
const getRandomInt = (int) => Math.floor(Math.random() * int);

// Generate a random email address by combining username with domain names
const getRandomEmail = () => `@${getRandomArrItem(email)}`;

// Randomly get up to 5 reactions per thought
const getReactions = () => {
    const results = [];
    let int = getRandomInt(5);
    for (let i = 0; i < int; i++) {
        results.push({
            reactionBody: getRandomArrItem(reactions),
            username: getRandomArrItem(users)
        });
    }
    return results;
}

const getThoughts = () => {
    const results = [];
    for (let i = 0; i < thoughts.length; i++) {
        results.push({
            thoughtText: thoughts[i],
            username: users[i],
            reactions: getReactions()
        })
    }
    return results;
};

const getUsers = () => {
    const results = [];
    for (let i = 0; i < users.length; i++) {
        results.push({
            username: users[i],
            email: `${users[i]}${getRandomEmail()}`,
        })
    }
    return results;
}

// Get a random number of friends from 0-19 (users.length-1)
const getFriends = async (user) => {
    const results = [];
    const int = getRandomInt(users.length - 1)
    for (let i = 0; i < int; i++) {
        // need to actually call on the users database to get potential friends
       results.push(getRandomArrItem(users));
    }
    // Filter results to make sure the user is not one of them
    const filter = results.filter(str => str !== user);
    // Remove duplicate friends from the array
    const unique = [...new Set(filter)];
    return unique;
};


module.exports = { getUsers, getThoughts, getFriends };