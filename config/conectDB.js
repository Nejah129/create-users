const mongoose = require("mongoose");
const config = require("config");
const db = config.get("db");
const conectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Data Base is Successfuly Conected')
  } catch (error) {
    console.log(error);
  }
};
module.exports=conectDB;