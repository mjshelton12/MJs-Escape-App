const router = require('express').Router();
const { User, Character } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll({include: [Character] });
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findOne({where: {id :req.params.id},
      include: [Character]
    });

    if (!userData) {
      res.status(404).json({ message: 'No user found with that id' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;