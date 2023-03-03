const { Router } = require('express');
const { User, Favourite, Note } = require('../db.js');
const { authenticate_user, generate_access_token, authenticate_token } = require('../utils/auth_utils.js');

const router = Router();

router.post('/login', authenticate_user,async (req, res) => {
  const { username } = req.body
  try {
    const user = await User.findOne({where: {
      username
    }, include: [Favourite, Note]});

    const access_token = generate_access_token(user.id)

    res.json({message: 'Success', user, access_token});
  } catch (error) {
    res.json(error.message)
  }
});

router.get('/testAuth', authenticate_token,async (req, res) => {
  const { username } = req.body
  console.log(req.id);
  try {
    const user = await User.findOne({where: {
      username
    }, include: [Favourite, Note]});

    res.json({message: 'Success', user});
  } catch (error) {
    res.json(error.message)
  }
});

module.exports = router;