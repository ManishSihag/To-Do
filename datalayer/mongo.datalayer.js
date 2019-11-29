const mongoose = require('mongoose');

class MongoDataLayer{
    
    // static connect(dbConfig)
    //  {
    //      return mongoose.connect('mongodb://localhost:27017/ToDoApp');
    //  }
     static connect(dbConfig)
     {
         let connection = `mongodb+srv://${dbConfig.user}:${dbConfig.password}@${dbConfig.connectionString}`
         return mongoose.connect(connection, { useNewUrlParser: true , useUnifiedTopology: true}).catch((err) => {
            throw new Error(`Could not connect to MongoDB: ${err.message}`);
        });
    }

     static disconnect(){
        return mongoose.connection.close();
    }
}

module.exports = MongoDataLayer;