import express from 'express';
import monConn from './db/mongoose.js';
import mongoose from 'mongoose';
import Todo from './models/todos.model.js';
import user from './models/users.model.js'
import bodyparser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyparser.json());

monConn();

//post todo route
app.post('/todos',(req, res) => {
    const todo = new Todo({
        text: req.body.text
    });

    todo.save()
        // doc is for the posted body
        .then((doc) => {
            res.send(doc)
        })
        .catch((e) => {
            res.status(400).send(e);
        });
});

//get todo route
app.get('/todos', (req, res) => {
    const alltodos = Todo.find()

    alltodos
        // todos is the collection of the actual json document 
        .then((todos) => {
            res.send({todos});
        })
        .catch((e) => {
            res.status(400).send(e)
        })
});

// console.log(ObjectId())
// 
//get todo:id route
app.get('/todos/:id', (req, res) => {
    const id = req.params.id
    if(!mongoose.isValidObjectId(id)){
        return res.status(404).send()
    }

    Todo.findById(id)
        .then((todos) => {
            res.send(todos)
        }).catch((e) => {
            return res.status(404).send()
        })

})

app.listen(port, () => {
    console.log(`Connected to port ${port}`); 
})

export default app;