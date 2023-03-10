const { Router } = require('express');
const { User, Favourite, Note } = require('../db.js');
const bcrypt = require('bcrypt');

const router = Router();

const salt_rounds = 10;

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({ include: [Favourite, Note]});
    res.json({message: 'Success', users});
  } catch (error) {
    res.json(error.message)
  }
  
});

router.get('/id/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, { include: [Favourite, Note]});
    res.json({message: 'Success', user});
  } catch (error) {
    res.json(error.message)
  }
});

router.post('/create', async (req, res) => {
  const { password } = req.body

  const hashed_password = await bcrypt.hash(password, salt_rounds)

  try {
    const new_user = await User.create({...req.body, password: hashed_password});
    res.json({message: 'Success', new_user});
  } catch (error) {
    res.json(error.message)
  }
});

module.exports = router;