const router = require('express').Router();
const { Character, Location, Inventory } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const characterData = await Character.findAll({include: [Location,Inventory] });
      res.status(200).json(characterData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/:id/', async (req, res) => {
    try {
      const characterData = await Character.findOne({where: {id :req.params.id},
        include: [Location, Inventory]
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

  router.patch('/:id', async (req, res) => {
    const characterData = await Character.findOne({where: {id :req.params.id}});
    const change = req.body
  
    if (characterData) {
      // Character.assign(characterData, change)
      const characterUpdate = await Character.update(change, {where: {id :req.params.id}})
      res.status(200).json(characterUpdate)
    } else {
      res.status(404).json({message: 'Unable to update location'})
    }
    })

  module.exports = router;