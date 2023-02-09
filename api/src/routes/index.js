const { Router } = require('express');
const users_routes = require('./users')
const notes_routes = require('./notes')
const favourites_routes = require('./favourites')

const router = Router();

router.use('/users', users_routes);
router.use('/notes', notes_routes);
router.use('/favourites', favourites_routes);

module.exports = router;
