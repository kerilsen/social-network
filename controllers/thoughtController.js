const Thought = require('../models/Thought');

module.exports = {
    async getAllThoughts(req, res) {
        try { 
        const thoughts = await Thought.find();
          res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
    async addNewThought(req, res) {
        try { 
          const thought = await Thought.create(req.body);
          res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async editThought(req, res) {
        try { 
          const thoughts = await Thought.findOneAndUpdate({ id: req.params.id }, { $set: { thoughtText: req.body.thoughtText, username: req.body.username } }, { new: true });
          await Thought.save;
          res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Not working - keeps trying and trying
    async removeThought(req, res) {
        try { 
            const thought = await Thought.findOneAndDelete({ id: req.params.id });
            if (!thought) {
                return res.status(404).json({ message: 'No such thought exists' });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
}