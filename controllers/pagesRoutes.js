const { Character, Location, Item, Interaction } = require("../models");

const router = require("express").Router();

router.get("/game", async (req, res) => {
  try {
    const initializeCharacter = await Character.findOne({
      where: (id = 1),
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
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/end", async (req, res) => {
  try {
    const initializeCharacter = await Character.findOne({where: (id = 1)});

    const character = initializeCharacter.get({ plain: true });

    res.render("end", {
      ...character,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/character", async (req, res) => {
  try {
    res.render("character");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
