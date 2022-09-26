const { Character } = require("../models");

const router = require("express").Router();

router.get("/:userid", async (req, res) => {
  try {
    const initializeCharacter = await Character.findAll(
      {where: {
        user_id: req.params.userid
    }});
    // characters = initializeCharacter.get({plain:true})
    // res.status(500).json(initializeCharacter)

    const charArray = initializeCharacter.map((character)=> character.get({plain:true}));

    console.log("FUCKING CHARACTERS ", charArray)

    res.render("charSelect", {
        charArray: charArray,
        user_id: req.params.userid,
        loggedIn: req.session.loggedIn
    });

  // res.status(500).json(characters)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
