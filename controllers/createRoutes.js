const router = require("express").Router();

router.get("/:userid", async (req, res) => {
  try {
    // res.status(200).json(req)
    res.render("create", {
        user_id: req.params.userid,
        loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
