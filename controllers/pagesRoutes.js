const { Character, Location, Item, Interaction } = require('../models');

const router = require('express').Router();

router.get('/Start', async (req, res) => {
    try {
      const initializeCharacter = await Character.findOne({ where: id = 1,
      include: [
        {
          model: Location,
          include:
            [{
                model: Interaction
              }]
        },
        {
          model: Item
        }
      ]
    });

    const character = initializeCharacter.get({ plain: true });
    
        res.render('Start', {
            ...character,
            loggedIn: req.session.loggedIn,
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      });

module.exports = router;