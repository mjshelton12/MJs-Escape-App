const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const pagesRoutes = require('./pagesRoutes.js')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', pagesRoutes)

module.exports = router;