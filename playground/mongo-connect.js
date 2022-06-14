const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017',(err, client)=>{
    if(err) throw err;
    console.log("Connected to server successfully");

    let db2 = client.db('TodoApp');

    db2.collection('Users').insertOne({
        name: "Christian",
        age: 19,
        location: "Nigeria"
    },(err, result) => { 
        if(err){
            return console.log("Unable to insert new document"); 
        }
        console.log(JSON.stringify(result,undefined,2));
        client.close
    })
    // let db2 = client.db('notTodoApp');
    // db2.collection('Todos').insertOne({
    //         text: 'Something to do',
    //         completed: false
    //     },(err, result) => {
    //         if(err){
    //             return console.log("Unable to do insert todo: ",err)
    //         }
    //         console.log(JSON.stringify(result, undefined, 2));
    //         client.close();
    //     })    
});
