const { Router } = require('express');
const users_routes = require('./users')
const notes_routes = require('./notes')

const router = Router();

router.use('/users', users_routes);
router.use('/notes', notes_routes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
