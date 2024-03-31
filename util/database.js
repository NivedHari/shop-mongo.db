const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@shop.belb8l9.mongodb.net/${process.env.MONGO_COLLECTION}?retryWrites=true&w=majority&appName=shop`
  )
    .then((client) => {
      console.log("connected");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
