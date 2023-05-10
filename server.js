const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

//MIDDLEWARE
app.use(express.static('./public'))
app.use(express.json())
//ROUTES

app.use('/api/v1/tasks', tasks)

const port = "5000"

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is Running on Port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start();


