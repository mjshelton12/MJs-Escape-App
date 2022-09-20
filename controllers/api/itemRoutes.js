const router = require('express').Router();
const { Item } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const itemData = await Item.findAll();
      res.status(200).json(itemData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
router.get('/:id', async (req, res) => {
  try {
    const itemData = await Item.findOne({where: {id :req.params.id}});

    if (!itemData) {
      res.status(404).json({ message: 'No item found with that id' });
      return;
    }
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;