const { Router } = require('express');
const { User, Favourite, Note } = require('../db.js');
const { createTestingUsers, createTestingNotes } = require('../utils/testing_utils')

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({ include: Favourite});
    res.json({message: 'Success', users});
  } catch (error) {
    res.json(error.message)
  }
  
});

router.post('/createTestUsers', async (req, res) => {
  const { amount } = req.query
  
  try {
    const users = await User.bulkCreate(createTestingUsers(amount));
    res.json({message: 'Success', users});
  } catch (error) {
    res.json(error.message)
  }
});

router.post('/createTestNotes', async (req, res) => {
  const { amount } = req.query
  
  try {
    const notes = await Note.bulkCreate(createTestingNotes(amount));
    res.json({message: 'Success', notes});
  } catch (error) {
    res.json(error.message)
  }
});

router.post('/createTestUserWithNotes', async (req, res) => {
  const { amount } = req.query
  
  try {
    const user = await User.create(createTestingUsers(1));
    const notes = await Note.bulkCreate(createTestingNotes(amount))
    
    const notes_id = notes.map( n => n.id)
    
    await user.setNotes(notes_id)
    
    const find_user = await User.findByPk(user.id, {include: [Favourite, Note]})

    res.json({message: 'Success', find_user});
  } catch (error) {
    res.json(error)
  }
});

module.exports = router