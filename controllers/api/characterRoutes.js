const router = require('express').Router();
const { Character, Location } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const characterData = await Character.findAll({include: [Location] });
      res.status(200).json(characterData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/:id', async (req, res) => {
    try {
      const characterData = await Character.findOne({where: {id :req.params.id},
        include: [Location]
      });
  
      if (!characterData) {
        res.status(404).json({ message: 'No character found with that id' });
        return;
      }
      res.status(200).json(characterData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;