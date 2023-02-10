const { Router } = require('express');
const { User, Favourite } = require('../db.js');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({ include: Favourite});
    res.json({message: 'Success', users});
  } catch (error) {
    res.json(error.message)
  }
  
});

router.post('/create', async (req, res) => {
  try {
    const new_user = await User.create(req.body);
    res.json({message: 'Success', new_user});
  } catch (error) {
    res.json(error.message)
  }
});

module.exports = router;