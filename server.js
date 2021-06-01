const express = require("express");
const conectDB = require("./config/conectDB");
const user=require('./routes/user')

const app = express();
app.use(express.json());
app.use('/user',user)
conectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is runing on port ${PORT}`)
);
