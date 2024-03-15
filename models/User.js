const { eachMonthOfInterval } = require("date-fns")
const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            // unique
            // trimmed
        },
        email: {
            type: String,
            required: true,
            // unique
            // must match valid email address(look into Mongoose's matching validation)
        },
        thoughts: [thoughtSchema],
        //     array of _id values referencing the Thought model
        friends: [friendSchema],
        //     array of _id values referencing the User model (self-reference)
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

// Schema Settings:
//     Create a virtual called friendCount that retrieves the length of the user's friends array field on query

const User = model('user', userSchema);

module.exports = User;