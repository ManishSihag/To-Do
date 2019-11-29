const mongoose = require('mongoose');

class MongoDataLayer{
    
    static connectToLocal()
     {
         return mongoose.connect('mongodb://localhost:27017/ToDoApp');
     }

     static connect(dbConfig)
     {
         let connection = `mongodb://${dbConfig.user}:${dbConfig.password}@${dbConfig.connectionString}`
         return mongoose.connect(connection, {useUnifiedTopology: true, useNewUrlParser: true }).catch((err) => {
            throw new Error(`Could not connect to MongoDB: ${err.message}`);
        });
        }
 

     static disconnect(){
        return mongoose.connection.close();
    }
}

module.exports = MongoDataLayer;