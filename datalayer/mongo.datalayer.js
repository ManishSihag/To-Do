const mongoose = require('mongoose');

class MongoDataLayer{
    
    static connect(dbConfig)
     {
         return mongoose.connect('mongodb://localhost:27017/ToDoApp');
     }
     static disconnect(){
        return mongoose.connection.close();
    }
}

module.exports = MongoDataLayer;