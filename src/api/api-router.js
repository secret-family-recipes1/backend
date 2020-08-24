const router = require('express').Router();

const userRouter = require('./users/users-router');
const recipesRouter = require('./recipes/recipes-router');

const protected = require('./auth/auth-middleware');

router.use('/users', userRouter);
router.use('/recipes', protected, recipesRouter);

module.exports = router;
