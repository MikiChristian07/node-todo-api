const { ObjectID } = require('bson');
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err, client) => {
    if (err) throw err;
    console.log('Connected to server successfully');

    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: 'watch videos'}).then((result) => {
    //     console.log(result);
    // })
    
    // db.collection('Todos').deleteOne({text: 'watch videos'}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Christian'}).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID('62a84f9a23592050d941eacd')}).then((result) => {
        console.log(result);
    })
})