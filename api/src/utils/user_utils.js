const { User } = require('../db.js');

async function create_user(user_data) {
  return await User.create(user_data);
}

module.exports = {
  create_user,
}