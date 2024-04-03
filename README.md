# Social Network

  ## Description

  ![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

  [GitHub repository](https://github.com/kerilsen/social-network)

  [Walkthrough video](https://kerilsen.github.io/social-network)

  This is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. I used Express.js for routing, a MongoDB database and the Mongoose ODM as well as the JavaScript date library [date-fns](https://date-fns.org/) to format the timestamps. 
  
  I learned a lot about NoSQL/MongoDB/Mongoose capabilities, but one of my biggest challenges was actually seeding the database with fake social networking data. I spent a lot of time trying to limit reactions to a thought to a user's friends, for instance, when this is something that would be solved in actual practice.
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  1. Navigate to the root directory of the project and type `npm i` to install the package dependencies. 
  2. Type `npm run start` to start the server. 
  3. Open http://localhost:3001/api/ plus the pathname in Insomnia or a similar API testing application.

  ## Usage

  Routes and functionalities:

  /api/users
  GET (Get all users)
  POST (Add new user with `username` and `email` as required fields)

  /api/users/:userId
  GET (Get a user's profile)
  PUT (Update a user's `username` and/or `email`)
  DELETE (Delete a user)

  /api/users/:userId/friends
  GET (Get a list of the user's friends)
  POST (Add a friend with `username` as required field)

  /api/users/:userId/friends/:friendId
  DELETE (Remove a friend)

  /api/thoughts
  GET (Get all thoughts)
  POST (Add new thought with `thoughtText` and `username` in the JSON body)

  /api/thoughts/:thoughtId
  GET (Get a thought)
  PUT (Edit a thought)
  DELETE (Delete a thought)

  /api/thoughts/:thoughtId/reactions
  GET (Get all reactions)
  POST (Create a reaction with `reactionBody` as the key)

  /api/thoughts/:thoughtId/reactions/:reactionId
  DELETE (Delete a reaction)

  ## Credits

  [Mastering email validation in Mongoose](https://blog.bounceless.io/mastering-email-validation-in-mongoose-syntax-uniqueness-and-beyond/)
  
  [Mongoose Crash Course - Beginner Through Advanced](https://www.youtube.com/watch?v=DZBGEVgL2eE) by Kyle Cook

  ## License

  [License: MIT License](https://opensource.org/licenses/MIT)

  ## Tests

  All testing of routes was done in Insomnia

  ## Questions

  If you have any questions about this project, please contact me at keri.l.sen@gmail.com.

  My GitHub profile is at: [https://github.com/kerilsen](https://github.com/kerilsen)
