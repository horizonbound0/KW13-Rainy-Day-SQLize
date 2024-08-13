const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const catData = await Category.findAll({
      order: ['id'],
      // be sure to include its associated Products
      include: [{ model: Product }],
    });
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const catData = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [{ model: Product }],
    });
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.name,
  })
  .then((newCat) => {
    res.json(newCat);
  })
  .catch((err) => {
    res.json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
  .then((updatedCat) => {
    res.json(updatedCat);
  })
  .catch((err) => {
    res.json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedCat) => {
    res.json(deletedCat);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
