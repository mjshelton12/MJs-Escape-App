const router = require('express').Router();
const session = require('express-session');
const { Character, Location, Interaction, Item } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const characterData = await Character.findAll({include: [
        {
          model: Location,
          include: [
            {
              model: Interaction,
            },
          ],
        },
        {
          model: Item,
        },
      ] });
      res.status(200).json(characterData);
    } catch (err) {
      res.status(500).json({message: err});
    } 
  });
  
  router.get('/:id/', async (req, res) => {
    try {
      const characterData = await Character.findOne({where: {id :req.params.id},
        include: [
          {
            model: Location,
            include: [
              {
                model: Interaction,
              },
            ],
          },
          {
            model: Item,
          },
        ]
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

  router.post('/', async (req, res) => {

    console.log("LOOK A USER " + req.session.id)
    try {
      const characterData = await Character.create({
        user_id: req.session.user_id,
        character_name: req.body,
        stats: "cool",
        location_id: 1
      });
      console.log("***LOOK HERE, A CHARACTER!" + characterData)
      res.status(200).json(characterData);
    } catch (err) {
      res.status(400).json(err);
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