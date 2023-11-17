const Restaurant = require("../Models/RestaurantModel.js");

const addRestaurant = async (req, res) => {
    try {
        const { name, address, contact, description, image } = req.body.datas;
        const result = await Restaurant.create({
            name,
            address,
            contact,
            description,
            image,
        });
        res.status(200).json({ message: "success", data: result });
    } catch (error) {
        console.log(error);
    }
}

const fetchRestaurants = async (req, res) => {
    try {
        const result = await Restaurant.findAll()
        console.log(result);
        res.status(200).json({ message: "success", data: result });
    } catch (err) {
        console.log(err);
    }
}

const editRestaurant = async (req, res) => {
    try {
        console.log('req.body=',req.body);
        const { id, name, address, contact, description, image } = req.body;
        await Restaurant.update({ name: name, address: address, contact: contact, description: description, image: image }, {
            where: {
                id: id    
            }
        })
        res.status(200).json({ message: "success" });
    } catch (err) {
        console.log(err);
    }
}

const deleteRestaurant = async (req, res) => {
    try {
        console.log('id=',req.body);
        const id = req.params.id
        console.log('param id=',id);
        await Restaurant.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json({ message: "success" });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addRestaurant,
    fetchRestaurants,
    editRestaurant,
    deleteRestaurant,
}