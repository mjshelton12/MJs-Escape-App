const router = require('express').Router();
const { Interaction, Location } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const interactionData = await Interaction.findAll({include: [Location]});
      res.status(200).json(interactionData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/:id', async (req, res) => {
    try {
    const interactionData = await Interaction.findOne({where: {id :req.params.id},
       include: [Location]
    
      });
  
      if (!interactionData) {
        res.status(404).json({ message: 'No interaction found with that id' });
        return;
      }
      res.status(200).json(interactionData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;