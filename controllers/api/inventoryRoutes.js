const router = require('express').Router();
const { Inventory, Item} = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const inventoryData = await Inventory.findAll({include: [Item] });
      res.status(200).json(inventoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
router.get('/:id', async (req, res) => {
  try {
    const inventoryData = await Inventory.findOne({where: {id :req.params.id},
      include: [Item]
    });

    if (!inventoryData) {
      res.status(404).json({ message: 'No inventory found with that id' });
      return;
    }
    res.status(200).json(inventoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const inventoryData = await Inventory.create(req.body);
    res.status(200).json(inventoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;