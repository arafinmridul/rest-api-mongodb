const { MongoClient } = require("mongodb");

// config dotenv
require("dotenv").config();

let dbConnection;

const password = process.env.MONGODB_PASSWORD;
const username = process.env.MONGODB_USERNAME;
const uri = `mongodb+srv://${username}:${password}@cluster0.bd4bugp.mongodb.net/`;

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db();
                return cb();
            })
            .catch((err) => {
                console.log(err);
                return cb(err);
            });
    },
    getDb: () => dbConnection,
};
