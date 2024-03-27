const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: () => Date.now(),
            immutable: true
            //     use a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
)

thoughtSchema.virtual('reactionCount').get(function() {
    const count = this.reactions.length;
    console.log(`My thought is ${this.thoughtText} and my reaction count is ${this.reactions.length}`);
    return count;
})

// call it as thought.reactionCount

const Thought = model('thought', thoughtSchema);

module.exports = Thought;