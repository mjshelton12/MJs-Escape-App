const router = require('express').Router();
const { Location, Interaction } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const locationData = await Location.findAll({});
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/:id', async (req, res) => {
    try {
      const locationData = await Location.findOne({where: {id :req.params.id},
        include: [Interaction]
      });
  
      if (!locationData) {
        res.status(404).json({ message: 'No location found with that id' });
        return;
      }
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;