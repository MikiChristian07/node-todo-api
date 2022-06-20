import mongoose from 'mongoose'

const monConn = () => {
    mongoose.promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/TodoApp')
        .then(() => {
            console.log('Connected to database successfully')
        })
        .catch((e) => {
            console.log('Error connecting to the database!!:', e)
        });
} 

export default monConn;