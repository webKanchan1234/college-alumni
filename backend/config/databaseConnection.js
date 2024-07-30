const mongoose = require("mongoose");

const databaseConnection = () => {
  mongoose
    .connect("mongodb+srv://kanchankr15153795:arQnumUzQjXnweev@cluster0.dky0fin.mongodb.net/college?retryWrites=true&w=majority")
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = databaseConnection;