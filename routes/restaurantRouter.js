const { Router } = require('express')
const restaurantController = require('../controller/restaurantController.js')

const router = Router()

router.post('/add-restaurant', restaurantController.addRestaurant);
router.get('/', restaurantController.fetchRestaurants);


module.exports = router;  