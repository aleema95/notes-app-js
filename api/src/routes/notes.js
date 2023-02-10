const { Router } = require('express');
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

module.exports = router;