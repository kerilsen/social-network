const Thought = require('../models/Thought');

module.exports = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            console.log(err.message);
            res.status(500).json(err);
        }
    },

    async getThought(req, res) {
        try {
            const thought = await Thought.findOne({ id: req.params.id });
            res.json(thought);
        } catch (err) {
            console.log(err.message);
            res.status(500).json(err);
        }
    },

    async addNewThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            console.log(err.message);
            res.status(500).json(err);
        }
    },

    async editThought(req, res) {
        try {
            const thoughts = await Thought.findOneAndUpdate({ id: req.params.id }, { $set: { thoughtText: req.body.thoughtText, username: req.body.username } }, { new: true });
            await Thought.save;
            res.json(thoughts);
        } catch (err) {
            console.log(err.message);
            res.status(500).json(err);
        }
    },

    async removeThought(req, res) {
        try {
            const deletedThought = await Thought.deleteOne({ id: req.params.id });
            if (deletedThought.deletedCount === 0) {
                return res.status(404).json({ message: 'No such thought exists' });
            }
            res.status(200).json({ message: 'Thought deleted successfully' })
        } catch (err) {
            console.log(err.message);
            res.status(500).json(err);
        }
    }
}