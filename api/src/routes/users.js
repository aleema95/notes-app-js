const { Router } = require('express');
const { User } = require('../db.js');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({message: 'Success', users});
  } catch (error) {
    res.send(404).json(error.message)
  }
  
});

router.post('/create', async (req, res) => {
  try {
    const new_user = await User.create(req.body);
    res.sendStatus(200).json({message: 'Success', new_user});
  } catch (error) {
    res.send(404).json(error.message)
  }
});

module.exports = router;