const router = require('express').Router();

const Recipes = require('./recipes-model');

router.post('/', (req, res) => {
  const { recipeName, user_id } = req.body;

  const userId = req.decodedToken.subject;

  Recipes.add({ recipeName, user_id: userId })
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((error) => {
      res.status(404).json({ message: 'cannot add recipe' });
    });
});

router.get('/', (req, res) => {
  const userId = req.decodedToken.subject;

  Recipes.getAll(userId)
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((error) => {
      res.status(404).json({ message: 'cannot find recipes' });
    });
});

router.get('/:id', (req, res) => {
  const userId = req.decodedToken.subject;
  const recipeId = req.params.id;

  Recipes.get(recipeId)
    .then((recipe) => {
      if (recipe.user_id === userId) {
        res.status(200).json(recipe);
      } else {
        res
          .status(403)
          .json({ message: 'this recipe does not belong to you' });
      }
    })
    .catch((error) => {
      res.status(404).json({ message: 'cannot find recipes' });
    });
});

router.delete('/:id', (req, res) => {
  Recipes.remove(req.params.id)
    .then((removed) => {
      res.status(200).json({ message: `recipe removed` });
    })
    .catch((error) => {
      res.status(404).json({ message: `unable to remove recipe` });
    });
});

module.exports = router;
