const { ObjectID } = require('bson');
const {MongoClient} = require('mongodb');

//findOneAndUpdate('filter','update','option','callback')

MongoClient.connect('mongodb://localhost:27017',(err, client) => {
    if(err) throw err;
    console.log("Connected to server successfully");

    db = client.db('TodoApp');
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('62a859eca00f0cf23eb9ae49')
    // },{
    //     $set:{
    //         completed: false
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('62a89088e7fc5061c1df8bd2')
    },{
        $set:{
            name: 'Christian'
        },
        // increment a field value 
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })
})