const { User, Favourite, Note } = require('../db.js');
require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const { ACCESS_TOKEN_SECRET } = process.env

const fifteen_minutes = 60 * 15

const authenticate_user = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      where:{
        username
      }
    })
      
    if(user == null) return res.sendStatus(404);
    
    bcrypt.compare(password, user.password, function(err, result) {
      // result == true
      if(err) return console.error(err);
      if(!result) return res.status(401).send('Authentication error, please check your credentials.')
      return next()
    }); 
  } catch (error) {
    return console.error(error,'catch Auth error');
  }
}

function generate_access_token(id) {
  return jwt.sign({id}, ACCESS_TOKEN_SECRET, { expiresIn: fifteen_minutes})
}

function authenticate_token(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) return res.sendStatus(401)

  return jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if(err) return res.sendStatus(403)
    
    req.id = user.id
    return next()
  })
}

module.exports = {
  authenticate_user,
  generate_access_token,
  authenticate_token
}