const { Schema, model } = require("mongoose");

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
                validator: (email) => { return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email); },
                message: props => `${props.email} is not a valid email address`
            }
        },
        thoughts: [{
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }],
        friends:  [{
                type: Schema.Types.ObjectId,
                ref: 'user'
            }]
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

// Remove thoughts and reactions associated with a user before deleting the user
userSchema.pre('remove', async function(next) {
    const username = this.username;

    // Delete associated thoughts
    await Thought.deleteMany({ username: username });

    // Delete associated reactions
    await Thought.updateMany(
        { username: username },
        { $pull: { reactions: { username: username } }}
    );

    next();
})

// Virtual method for displaying the number of friends that a user has
userSchema.virtual('friendCount').get(function () {
    const count = this.friends.length;
    return count;
});

const User = model('user', userSchema);

module.exports = User;