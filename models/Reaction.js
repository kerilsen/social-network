const { format } = require('date-fns');
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
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: () => new Date(),
            immutable: true,
        }
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

reactionSchema.virtual('formattedTime').get(function() {
    const timestamp = format(this.createdAt, "h:mmaaa 'on' EEE MMM do, yyyy");
    return timestamp;
})

module.exports = reactionSchema;