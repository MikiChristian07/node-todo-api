import expect from 'expect'
import request  from 'supertest'
import Todo from '../models/todos.model.js'
import app from '../app.js'

//make a check for database meeting requirements
beforeEach((done) => {
    Todo.deleteMany({})
        .then(() => {
            done()
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
                Todo.find()
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
                        expect(todos.length).toBe(0);
                        done();
                    })
                    .catch((e) => done(e));
            })
        })
});