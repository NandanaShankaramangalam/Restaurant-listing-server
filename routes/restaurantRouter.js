const { Router } = require('express')
const restaurantController = require('../controller/restaurantController.js')

const router = Router()

router.post('/add-restaurant', restaurantController.addRestaurant);
router.get('/', restaurantController.fetchRestaurants);
router.patch('/edit-restaurant', restaurantController.editRestaurant);
router.delete('/delete-restaurant/:id', restaurantController.deleteRestaurant);


module.exports = router;  