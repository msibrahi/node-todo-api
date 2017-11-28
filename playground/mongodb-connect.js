//const MongoClient=require('mongodb').MongoClient
const {MongoClient, ObjectID}=require('mongodb')

MongoClient.connect('mongodb://localhost:27017/USERS',(err,db)=>{
  if(err){
    return console.log('Uable to connect to Mongo db server');
  }
  console.log('Connected to mongoDb server');
  db.collection('Work').insertOne({
    name:'Yasir',
    age: 36,
    location: 72704
  },(err,results) => {
    if(err){
      console.log("Record could not be added", err);
    }
    console.log("record inserted");
    console.log(results.ops[0]._id.getTimestamp());
  })
  db.close();
});
