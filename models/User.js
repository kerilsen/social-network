const { eachMonthOfInterval } = require("date-fns")
const { Schema, model, SchemaTypes } = require("mongoose");
const thoughtSchema = require('./Thought');
const friendSchema = require('./User');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            // trimmed
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            validate: {
                validator: () => { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); },
                message: props => `${props.value} is not a valid email address`
            }
            // must match valid email address(look into Mongoose's matching validation)
        },
        thoughts: [thoughtSchema],
        //     array of _id values referencing the Thought model
        // friends: [friendSchema],
        friends: [friendSchema]
        
        //     array of _id values referencing the User model (self-reference)
    }
    // {
    //     toJSON: {
    //         getters: true,
    //     },
    // }
);

// Schema Settings:
//     Create a virtual called friendCount that retrieves the length of the user's friends array field on query

const User = model('user', userSchema);

module.exports = User;