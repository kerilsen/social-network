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
.post(createReaction)

// /api/thoughts/:thoughtId/reactions/:reactionId
router
.route('/:reactionId')
.delete(removeReaction)

module.exports = router;