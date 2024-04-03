const { format } = require('date-fns');
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
            default: () => new Date(),
            immutable: true
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

thoughtSchema.virtual('formattedTime').get(function() {
    const timestamp = format(this.createdAt, "h:mmaaa 'on' EEE MMM do, yyyy");
    return timestamp;
})

thoughtSchema.virtual('reactionCount').get(function () {
    const count = this.reactions.length;
    return count;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;