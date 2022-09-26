const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const gameRoutes = require('./gameRoutes.js')
const characterRoutes = require('./charRoutes.js')
const createRoutes = require('./createRoutes.js')
const endRoutes = require('./endRoutes.js')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/game', gameRoutes);
router.use('/char', characterRoutes);
router.use('/create', createRoutes);
router.use('/end', endRoutes);

module.exports = router;