const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-commerces",{useNewUrlParser:true});
mongoose.set('strictQuery', true);

