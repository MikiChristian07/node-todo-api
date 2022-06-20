import express from 'express';
import monConn from './db/mongoose.js';
import Todo from './models/todos.model.js';
import user from './models/users.model.js'
import bodyparser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyparser.json());
monConn()

app.post('/todos',(req, res)=> {
    const todo = new Todo({
        text: req.body.text
    });

    todo.save()
        .then((doc) => {
            res.send(doc)
        })
        .catch((e) => {
            res.status(400).send(e);
        });
});

app.listen(port, () => {
    console.log(`Connected to port ${port}`); 
})