const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoute');
const postRoutes = require('./postRoute');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
