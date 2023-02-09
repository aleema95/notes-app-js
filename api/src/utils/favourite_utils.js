const { Favourite, User, Note } = require('../db.js');
// "5dd3b0c1-a1e2-4192-8661-4e1584ba096e" user
// "ac679b1d-48fe-4a0d-b220-a52acfb49bec" note

async function create_favourite() {
  const new_favourite = await Favourite.create();
  const user = await User.findByPk("427aa1f0-f31f-4316-b4c8-096ded6a46cb")
  const note = await Note.findByPk("3abd740e-0f31-4f68-b06a-e4007b4781be")
  await user.addFavourite(new_favourite.id)
  await note.addFavourite(new_favourite.id)

  return 
}

module.exports = {
  create_favourite,
}