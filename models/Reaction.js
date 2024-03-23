const { Schema, Types } = require('mongoose');
const User = require('./User');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        // user: {
        //     type: Schema.Types.ObjectId,
        //     ref: User
        // },
        createdAt: {
            type: Date,
            default: () => Date.now(),
            immutable: true
            // use a getter method to format the timestamp on query
        }
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

module.exports = reactionSchema;