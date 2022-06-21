import express from 'express';
import monConn from './db/mongoose.js';
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

app.listen(port, () => {
    console.log(`Connected to port ${port}`); 
})

export default app;