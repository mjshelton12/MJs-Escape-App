const router = require('express').Router();
const characterRoutes = require('./characterRoutes.js');
const interactionRoutes = require('./interactionRoutes');
const locationRoutes = require('./locationRoutes');
const itemRoutes = require('./itemRoutes')
const resolutionRoutes = require('./resolutionRoutes')
const userRoutes = require('./userRoutes')
const inventoryRoutes = require('./inventoryRoutes')

router.use('/characters', characterRoutes);
router.use('/interactions', interactionRoutes);
router.use('/locations', locationRoutes);
router.use('/items',itemRoutes)
router.use('/resolutions',resolutionRoutes)
router.use('/users',userRoutes)
router.use('/inventories',inventoryRoutes)

module.exports = router;