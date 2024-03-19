const mongoose = require("mongoose");
const url =
  "mongodb+srv://jperdomo:hgGjdSOKhSWUHuwc@cluster0.rwd0bz1.mongodb.net/DB_movies?retryWrites=true&w=majority&appName=Cluster0";

const dbConnection = async () => {
  await mongoose.connect(url);
};
module.exports = dbConnection;
