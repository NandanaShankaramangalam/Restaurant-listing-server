const express = require('express')
const cors = require('cors')
const sequelize = require('./Config/Connection.js')


const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ["GET", "POST", "PUT", "DELETE"]
}))

app.listen(8000, () => {
    console.log("Connected...");
});