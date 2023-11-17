const express = require('express')
const cors = require('cors')
const sequelize = require('./Config/Connection.js')
const restaurantRouter = require("./routes/restaurantRouter.js");

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}))

app.use("/", restaurantRouter)

sequelize.authenticate().then(() => {
    console.log('Connection established successfully.')
}).catch((error) => {
    console.error('Unable to connect to the database: ', error)
})

app.listen(3001, () => {
    console.log("Connected...");
});