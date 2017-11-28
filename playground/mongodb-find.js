//const MongoClient=require('mongodb').MongoClient
const {MongoClient, ObjectID}=require('mongodb')

MongoClient.connect('mongodb://localhost:27017/test',(err,db)=>{
  if(err){
    return console.log('Uable to connect to Mongo db server');
  }
  console.log('Connected to mongoDb server');
  var x={do:'say buy'}
  db.collection('Todos').find({
    _id:new ObjectID("59f29bbcede1d49707741e48")
  }).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch tods',err);
  });
db.close();
});
