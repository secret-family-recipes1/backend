const router = require('express').Router({ mergeParams: true });

const Ingredients = require('./ingredients-model');

router.get('/', (req, res) => {
  const recipe_id = req.params.id;

  Ingredients.getIngredients(recipe_id)
    .then((ingredients) => {
      res.status(200).json(ingredients);
    })
    .catch((error) => {
      res.status(404).json({ message: `cannot get ingredients` });
    });
});

module.exports = router;
