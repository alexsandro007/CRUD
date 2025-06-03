const express = require('express');
const router = express.Router();
const { createCar, getCar, updateCar, deleteCar, getCarList } = require('../usecase/carUsecase');

// Сначала маршрут /getList
router.get('/getList', async (req, res) => {
  try {
    const cars = await getCarList();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Затем остальные маршруты
router.post('/', async (req, res) => {
  try {
    const car = await createCar(req.body);
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const car = await getCar(req.params.id);
    if (!car) return res.status(404).json({ error: 'Автомобиль не найден' });
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const car = await updateCar(req.params.id, req.body);
    if (!car) return res.status(404).json({ error: 'Автомобиль не найден' });
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await deleteCar(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
