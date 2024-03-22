const { Schema, Types } = require('mongoose');

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
        // link to User model? should this be type: Schema.Types.ObjectId and ref: User instead?
        // 'getting' the username from the User model?
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: () => Date.now(),
            immutable: true
            // use a getter method to format the timestamp on query
        }
    }
);

module.exports = reactionSchema;