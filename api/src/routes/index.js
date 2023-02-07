const { Router } = require('express');
const users_routes = require('./users')

const router = Router();

router.use('/users', users_routes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
