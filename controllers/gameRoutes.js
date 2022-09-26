const { Character, Location, Item, Interaction } = require("../models");

const router = require("express").Router();

router.get("/:charid", async (req, res) => {
  try {
    const initializeCharacter = await Character.findOne({
      where: {id: req.params.charid},
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
      ],
    });

    const character = initializeCharacter.get({ plain: true });

    res.render("game", {
      ...character,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log("LOOK HERE BITCHES ",err);
    res.status(500).json(err);
  }
});

module.exports = router;
