const { Character, Location, Item, Interaction } = require("../models");

const router = require("express").Router();

router.get("/game/:charid", async (req, res) => {
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
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/end", async (req, res) => {
  try {
    res.render("end");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/charSelect/:userid", async (req, res) => {
  try {
    const initializeCharacter = await Character.findAll(
      {where: {user_id: req.params.userid},
    raw:true});
    // characters = initializeCharacter.get({plain:true})
    // res.status(500).json(initializeCharacter)
    res.render("charSelect", {
        "characters":initializeCharacter,
        "loggedIn": req.session.loggedIn
    });
  // res.status(500).json(characters)
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
