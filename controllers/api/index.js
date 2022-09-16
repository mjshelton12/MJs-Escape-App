const router = require('express').Router();
const characterRoutes = require('./characterRoutes.js');
const interactionRoutes = require('./interactionRoutes');
const locationRoutes = require('./locationRoutes');

router.use('/characters', characterRoutes);
router.use('/interactions', interactionRoutes);
router.use('/locations', locationRoutes);

module.exports = router;