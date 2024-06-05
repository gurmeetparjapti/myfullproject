const mongoose = require("mongoose");
const DB = process.env.database;
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("connection start")).catch((error)=> console.log(error.message));
   