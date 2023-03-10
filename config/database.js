const mongoose = require("mongoose");

const connectMongoDatabase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log("Mongodb connected");
    }).catch(err => {
      console.log("Database failed to connect")
      console.log(err)
    });
};

module.exports = connectMongoDatabase;
