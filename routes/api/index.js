const router = require('express').Router();

const reactionRoutes = require('./reactionRoutes');
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/thoughts/:thoughtId/reactions', reactionRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;