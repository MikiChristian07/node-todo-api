import expect from 'expect'
import request  from 'supertest'
import { ObjectID } from 'mongodb'
import Todo from '../models/todos.model.js'
import app from '../app.js'

//for existing todos documents
const texts = [{
    _id: new ObjectID(),
    text: "first todo list"
}, {
    _id: new ObjectID(),
    text: "Second todo list"
}]

//make a check for database meeting requirements
beforeEach((done) => {
    Todo.deleteMany({})
        .then(() => {
            Todo.insertMany(texts);
        })
        .then(() => {
            done();
        })
})

describe('POST /todos', () => {
    it('should create a new todo', (done) =>{
        const text = 'Test a todo text';

        //test use case for a new todo insertion
        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if(err){
                    return done(err);
                }

                //check for if the supposed object(resource) is in db
                Todo.find({text})
                    .then((todos) => {
                        expect(todos.length).toBe(1);
                        expect(todos[0].text).toBe(text);
                        done();
                    })
                    .catch((e) => done(e));
            });
    });

    //Should verify todo to not be created if it does not meet requirements
    it('should not create todo with invalid body data', (done) => {

        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if(err){
                    return done(err);
                }

                //check for if the supposed object(resource) is in db
                Todo.find()
                    .then((todos) => {
                        expect(todos.length).toBe(2);
                        done();
                    })
                    .catch((e) => done(e));
            })
    })
});

describe('GET /todos', () => {
    it('should get all the current todos', (done) => {

        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2)
            })
            .end(done) 
    })
})

describe('GET /todos:id', () => {
    it('should get a current todo by its id', (done) => {

        request(app)
            .get(`/todos${texts[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(texts[0].text)
            })
            .end(done);
    })
})