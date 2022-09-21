const router = require('express').Router();
const { Resolution, Interaction } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const resolutionData = await Resolution.findAll({include: [Interaction] });
      res.status(200).json(resolutionData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
router.get('/:id', async (req, res) => {
  try {
    const resolutionData = await Resolution.findOne({where: {id :req.params.id},
      include: [Interaction]});

    if (!resolutionData) {
      res.status(404).json({ message: 'No resolution found with that id' });
      return;
    }
    res.status(200).json(resolutionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;