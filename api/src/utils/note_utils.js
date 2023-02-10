const { Note } = require('../db.js');
// "5dd3b0c1-a1e2-4192-8661-4e1584ba096e" user
// "ac679b1d-48fe-4a0d-b220-a52acfb49bec" note

async function update_note(id, {title, body, rating}) {
  await Note.update({
    title,
    body,
    rating
  },{
    where: { id }
  });
}

module.exports = {
  update_note,
}