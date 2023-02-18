function createTestingUsers(amount_of_users) {
  const users = [];

  for (let i = 0; i < amount_of_users; i++) {
    users.push({
      name: `Name_${Math.random() * 100000}`,
      last_name: `Last_name_${Math.random() * 100000}`,
      username: `Username_${Math.random() * 100000}`,
      email: `email_${Math.random() * 100000}@gmail.com`,
      password: `${Math.random() * 100000}`,
    })
  }

  if (amount_of_users === 1) return users[0]

  return users
}

function createTestingNotes(amount_of_notes) {
  const notes = [];
  const lorem_ipsum = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

  for (let i = 0; i < amount_of_notes; i++) {
    const random_number = Math.floor(Math.random() * 5) 
    notes.push({
      title: `Name_${i}`,
      body: `${lorem_ipsum.split(' ').slice(0,Math.random() * 40).join(' ')}`,
      rating: Math.ceil(Math.random() * random_number),
    })
  }

  return notes
}

module.exports = {
  createTestingUsers,
  createTestingNotes
}