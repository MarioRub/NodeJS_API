const mongoose = require("mongoose");
const uri = "mongodb+srv://mariorub:<password>@clustermariorub.l05ig.mongodb.net/taskapp?retryWrites=true&w=majority";

mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true })
.then(db=>console.log("Connection Sucessful"))
.catch(err=>console.error);

module.exports=mongoose;