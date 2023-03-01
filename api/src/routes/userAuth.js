const { Router } = require('express');
const { User, Favourite, Note } = require('../db.js');
const { authenticate_user } = require('../utils/auth_utils.js');

const router = Router();

router.get('/login', authenticate_user,async (req, res) => {
  try {
    const users = await User.findAll({ include: [Favourite, Note]});
    res.json({message: 'Success', users});
  } catch (error) {
    res.json(error.message)
  }
});


module.exports = router;