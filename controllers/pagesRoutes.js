const { Character, Location, Inventory, Interaction } = require('../models');

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
        }
        // {
        //   model: Inventory
        // }
      ]
    });

    console.log("Line 22 " + JSON.stringify(initializeCharacter))

    const character = initializeCharacter.get({ plain: true });

    console.log("Line 27 " + character)
    
        res.render('Start', {
            ...character,
            loggedIn: req.session.loggedIn,
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      });

//Post character in a location

module.exports = router;