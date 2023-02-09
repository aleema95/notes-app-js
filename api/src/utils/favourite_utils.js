const { Favourite, User, Note } = require('../db.js');
// "5dd3b0c1-a1e2-4192-8661-4e1584ba096e" user
// "ac679b1d-48fe-4a0d-b220-a52acfb49bec" note

async function create_favourite({user_id, note_id}) {
  const new_favourite = await Favourite.create();
  const user = await User.findByPk(user_id)
  const note = await Note.findByPk(note_id)
  await user.addFavourite(new_favourite.id)
  await note.addFavourite(new_favourite.id)

  return new_favourite
}

module.exports = {
  create_favourite,
}