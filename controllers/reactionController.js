module.exports = {
    async getAllreactions(req, res) {
        try { 
            // await find where thought id = ? and populate reactions
          res.json(friends);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createReaction(req, res) {
        try {
            const reaction = await Thought.create(req.body);
            // await find where thought id = ? and create new reaction
            res.json(reaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async removeReaction(req, res) {
        try {
            const reaction = await deleteOne();
            // where reaction id = ?
            res.json(reaction)
        } catch (err) {
            res.status(500).json(err);
        }
    },
}