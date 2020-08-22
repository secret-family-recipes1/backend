const router = require('express').Router();

const authRouter = require('./auth/auth-router');
const recipesRouter = require('./recipes/recipes-router');

const protected = require('./auth/auth-middleware');

router.use('/auth', authRouter);
router.use('/recipes', protected, recipesRouter);

module.exports = router;
