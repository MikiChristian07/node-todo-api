const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err, client) => {
    if(err) throw err;
    console.log("Connected to server successfully");

    const db = client.db('TodoApp');

    //To fecth all documents from a collection
    db.collection('Users').find({name: 'Christian'}).count().then((count) => {

        console.log(`Todos: ${count}`);
        // console.log(JSON.stringify());
    }, (err) => {
        console.log('Unable to fetch to todos with err:' + err);
    })


})