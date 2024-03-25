const { Thought } = require('../models');

module.exports = {
    async getAllReactions(req, res) {
        try {
            const reactions = await Thought.find({ _id: req.params.id }).populate(reactions);
            res.json(reactions);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createReaction(req, res) {
        const array = await getAllReactions(req, res);
        try {
            const reaction = await Thought.findOneAndUpdate({ _id: req.params.id }, { reactions: array.push(req.body) });
            res.json(reaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async removeReaction(req, res) {
        const array = await getAllReactions(req, res);
        const filter = array.filter(str => str !== req.params.username);
        try {
            const reactions = await Thought.findOneAndUpdate({ _id: req.params.id }, { reactions: filter });
            res.json(reactions)
        } catch (err) {
            res.status(500).json(err);
        }
    },
}