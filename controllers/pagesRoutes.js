const router = require('express').Router();

router.get('/Start', async (req, res) => {
    try {
    
        res.render('Start', {
            loggedIn: req.session.loggedIn,
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      });
      
module.exports = router;