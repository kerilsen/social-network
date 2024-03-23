const { eachMonthOfInterval } = require("date-fns")
const { Schema, Types, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
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
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId, 
                ref: 'User'
            }]
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

userSchema.virtual('friendCount').get(function () {
    const count = this.friends.length;
    console.log(`My username is ${this.username} and I have only ${this.friends.length} friends`);
    return count;
})

const User = model('user', userSchema);

module.exports = User;