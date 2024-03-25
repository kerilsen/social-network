const { Thought } = require('../models');

module.exports = {
    async getAllReactions(req, res) {
        try {
            const reactions = await Thought.find(
                { username: req.params.username }).populate(reactions);
            res.json(reactions);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createReaction(req, res) {
        try {
            const reaction = await Thought.findOneAndUpdate(
                { username: req.params.username }, 
                { $push: { reactions: req.body } }, 
                { new: true });
            res.json(reaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async removeReaction(req, res) {
        try {
            const reactions = await Thought.findOneAndUpdate(
                { username: req.params.username }, 
                { $pull: { reactions: req.body } },
                { new: true});
            res.json(reactions)
        } catch (err) {
            res.status(500).json(err);
        }
    },
}