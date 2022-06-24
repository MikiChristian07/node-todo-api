import monConn from "./../runner/db/mongoose.js";
import Todo from "./../runner/models/todos.model.js";
import User from "./../runner/models/users.model.js"

const tid = '62b1bbd08958a9684273a5c4';
const uid = '62ab47d6aa185b50acf75a60';

//ObjectID.isValid

monConn()

// Todo.find({
//    _id: id 
// }).then((todos) => {
//     console.log('Todos', todos)
// })
// .catch((e) => {
//     console.log(e)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(todo)
// })

// Todo.findById(tid)
//     .then((todo) => {
//         if(!todo) {
//             return console.log('Id not found')
//         }
//         console.log('Todos', todo)
//     })

User.findById(uid)
    .then((user) => {
        if(!user){
            return console.log('User not Found')
        }
        console.log('User by id ', user)
    }).catch((e) => {
        console.log(e)
    })
    
 