const mongoose = require('mongoose')
// const connect = mongoose.connect('mongodb://localhost:27017/Login');
 const  connect =mongoose.connect('mongodb://127.0.0.1:27017/Login')

connect.then(() => {
    console.log('Date Base connected');
})
.catch((error) => {
    console.log('Database connot connect', error);
})

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type : String,
        require: true
    }  
})

// collection part

const collection = new mongoose.model('users', LoginSchema)

module.exports = collection
 