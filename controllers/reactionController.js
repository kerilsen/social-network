const { Thought } = require('../models');

module.exports = {
    async getAllReactions(req, res) {
        try {
            const allReactions = await Thought.findOne(
                { id: req.params.id }).populate("reactions");
            res.json(allReactions);
        } catch (err) {
            console.log(err.message);
            res.status(500).json(err);
        }
    },

    async createReaction(req, res) {
        try {
            const reaction = await Thought.findOneAndUpdate(
                { id: req.params.id }, 
                { $push: { reactions: req.body } }, 
                { new: true });
            res.json(reaction);
        } catch (err) {
            console.log(err.message);
            res.status(500).json(err);
        }
    },

    async removeReaction(req, res) {
        try {
            const deletedReaction = await Thought.findOneAndUpdate(
                { thoughtId: req.params.thoughtId }, 
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true});
            res.json(deletedReaction)
        } catch (err) {
            console.log(err.message);
            res.status(500).json(err);
        }
    },
}