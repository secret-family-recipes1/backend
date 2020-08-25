const router = require('express').Router();

const Recipes = require('./recipes-model');
const Ingredients = require('./ingredients/ingredients-model');
const Instructions = require('./instructions/instructions-model');

router.post('/', (req, res) => {
  const { name, category, source, imageURL, user_id } = req.body;

  const userId = req.decodedToken.subject;

  Recipes.add({ name, category, source, imageURL, user_id: userId })
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((error) => {
      res
        .status(404)
        .json({ message: 'cannot add recipe', error: error.message });
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
  const id = req.params.id;

  Recipes.get(id)
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

router.put('/:id', (req, res) => {
  const changes = req.body;

  Recipes.update(req.params.id, changes)
    .then((updatedRecipe) => {
      res.json({ message: `recipes has been updated` });
    })
    .catch((error) => {
      res.status(404).json({ message: `cannot update recipe` });
    });
});

router.delete('/:id', (req, res) => {
  Recipes.remove(req.params.id)
    .then((count) => {
      if (count) {
        res.status(204).end();
      } else {
        res
          .status(404)
          .json({ message: 'Could not find a recipe with that id.' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to delete recipe' });
    });
});

// GET - recipe's ingredients
router.get('/:id/ingredients', (req, res) => {
  const { id } = req.params;

  Ingredients.findByRecipe(id)
    .then((ingredients) => {
      res.status(200).json({ data: ingredients });
    })
    .catch((err) =>
      res.status(404).json({ message: 'ingredients not found' })
    );
});

// POST - recipe ingredients
router.post('/:id/ingredients', (req, res) => {
  const { id } = req.params;
  const { ingredient, recipe_id } = req.body;

  Ingredients.add({ ingredient, recipe_id: id }).then(
    (ingredients) => {
      res.status(200).json({ data: ingredients });
    }
  );
});

// PUT - recipe ingredients
router.put('/:id/ingredients', (req, res) => {
  const { id } = req.body;
  const changes = req.body;
  console.log(changes, id);

  Ingredients.findByRecipe(id)
    .then((instruction) => {
      if (instruction) {
        Ingredients.update(id, changes).then((updateIngredient) => {
          res.status(200).json({ data: updateIngredient });
        });
      } else {
        res.status(404)({
          message: 'There is no ingredient.',
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Failed to update the ingredient.' });
    });
});

// GET - recipe's instructions
router.get('/:id/instructions', (req, res) => {
  const { id } = req.params;

  Instructions.findByRecipe(id)
    .then((instructions) => {
      res.status(200).json({ data: instructions });
    })
    .catch((err) =>
      res.status(404).json({ message: 'instructions not found.' })
    );
});

// POST - recipe instructions
router.post('/:id/instructions', (req, res) => {
  const { id } = req.params;
  const { instruction, recipe_id } = req.body;

  Instructions.add({ instruction, recipe_id: id })
    .then((instructions) => {
      res.status(200).json({ data: instructions });
    })
    .catch((error) => {
      res.status(404).json({
        data: `cannot create instructions`,
        error: error.message,
      });
    });
});

// PUT - recipe instructions
router.put('/:id/instructions', (req, res) => {
  const { id } = req.body;
  const changes = req.body;
  console.log(changes, id);

  Instructions.findByRecipe(id)
    .then((instruction) => {
      if (instruction) {
        Instructions.update(id, changes).then(
          (updatedInstruction) => {
            res.status(200).json({ data: updatedInstruction });
          }
        );
      } else {
        res.status(404)({
          message: 'There is no instruction with that ID.',
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Failed to update the instruction.' });
    });
});

module.exports = router;
