const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const url = "mongodb://127.0.0.1:27017/fitness";
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!");
  }
);

module.exports = mongoose.connection;
