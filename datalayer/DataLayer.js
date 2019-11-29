const MongoDataLayer = require('../datalayer/mongo.datalayer');
const dbConfig = require('../config/default');
class DataLayer{

    static initMongoDataLayer() {
        console.log("Connecting to mongo database:", dbConfig.mongo.database)
        return MongoDataLayer.connect(dbConfig.mongo);
    }

}

module.exports = DataLayer;