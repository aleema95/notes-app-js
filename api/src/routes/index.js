const { Router } = require('express');
const users_routes = require('./users')
const notes_routes = require('./notes')
const favourites_routes = require('./favourites')
const testing_routes = require('./testing')
const userAuth_routes = require('./userAuth')

const router = Router();

router.use('/users', users_routes);
router.use('/notes', notes_routes);
router.use('/favourites', favourites_routes);
router.use('/userAuth', userAuth_routes);

// ==================
router.use('/testing', testing_routes);

module.exports = router;
