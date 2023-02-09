const { Router } = require('express');
const { Favourite } = require('../db.js');
const { create_favourite } = require('../utils/favourite_utils')

const router = Router();

router.get('/', async (req, res) => {
  try {
    const favourites = await Favourite.findAll();
    res.status(200).json({message: 'Success', favourites});
  } catch (error) {
    res.send(404).json(error.message)
  }
  
});

router.post('/create', async (req, res) => {
  try {
    const new_favourites = create_favourite()
    res.json({message: 'Success', new_favourites});
  } catch (error) {
    res.json(error.message)
  }
});

module.exports = router;