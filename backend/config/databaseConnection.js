const mongoose = require("mongoose");

const databaseConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/college")
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = databaseConnection;