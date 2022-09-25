const router = require('express').Router();
const { Inventory, Item} = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const inventoryData = await Inventory.findAll();
      res.status(200).json(inventoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
router.get('/:charID', async (req, res) => {

  try {
    const inventoryData = await Inventory.findOne({where: {character_id : req.params.charID,
                                                           item_id: 2}}); 
    if (!inventoryData) {
      res.status(404).json({ message: 'No inventory found with that id' });
      return;
    }
    res.status(200).json(inventoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/:charID', async (req, res) => {

  try {
    const inventoryData = await Inventory.create({
      item_id: req.body.change,
      character_id: req.params.charID
    });
    console.log(inventoryData)
    res.status(200).json(inventoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;