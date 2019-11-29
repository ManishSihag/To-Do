const mongoose = require('mongoose');

class MongoDataLayer{
    
    // static connect(dbConfig)
    //  {
    //      return mongoose.connect('mongodb://localhost:27017/ToDoApp');
    //  }
     static connect(dbConfig)
     {
         let connection = `mongodb+srv://${dbConfig.user}:${dbConfig.password}@${dbConfig.connectionString}`
       const mongooseConnectionPromise = mongoose.connect(connection, { useNewUrlParser: true , useUnifiedTopology: true});
         mongoose.connection.on('error', err => {
             console.error(`MongoDB connection error: ${err}`);
             //process.exit(-1);
         });

         return mongooseConnectionPromise;
        }
 

     static disconnect(){
        return mongoose.connection.close();
    }
}

module.exports = MongoDataLayer;