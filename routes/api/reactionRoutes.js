const router = require('express').Router();

const {
    getAllReactions,
    createReaction,
    removeReaction,
} = require('../../controllers/reactionController');

// /api/thoughts/:thoughtId/reactions
router
.route('/')
.get(getAllReactions)

// /api/thoughts/:thoughtId/reactions/:reactionId
router
.route('/:reactionId')
.post(createReaction)
.delete(removeReaction)

module.exports = router;