const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/';

const connectToMongo = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI, () => {
        console.log('Conected to mongo Successfully');
    })
}

module.exports = connectToMongo;