const Restaurant = require("../Models/RestaurantModel.js");

const addRestaurant = async (req, res) => {
    try {
        const { name, address, contact, description, image } = req.body.datas;
        console.log('req.body=',req.body);
        console.log("name=", name);
        // console.log("address=", address);
        // console.log("contact=", contact);
        // console.log("description=", description);
        // console.log("image=", image);
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

module.exports = {
    addRestaurant,
    fetchRestaurants,
}