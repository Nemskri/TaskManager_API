const mongoose = require('mongoose')


mongoose.set('strictQuery', false);
const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true
    })
}

module.exports = connectDB

