const { Router } = require('express');
const { update_note } = require('../utils/note_utils')
const { Note } = require('../db.js');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const note = await Note.findAll();
    res.status(200).json({message: 'Success', note});
  } catch (error) {
    res.send(404).json(error.message)
  }
});

router.post('/create', async (req, res) => {
  try {
    const new_note = await Note.create(req.body);

    res.send({message: 'Success', new_note});
  } catch (error) {
    res.sendStatus(404).json(error)
  }
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const new_note = await Note.destroy({
      where: { id }
    });
    res.send({message: 'Note deleted successfuly'});
  } catch (error) {
    res.sendStatus(404).json(error)
  }
});

router.put('/update/:id', async (req, res) => {
  const { id } = req.params;

  try {
    update_note( id ,req.body)

    res.send({message: 'Note updated successfuly'});
  } catch (error) {
    res.sendStatus(404).json(error)
  }
});

module.exports = router;