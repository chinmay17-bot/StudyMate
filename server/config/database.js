const mongoose= require("mongoose");
requie("dotenv").config();

exports.connect = () =>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=> {
        console.log("DB Connnected successfully");
    })
    .catch((error)=>{
        console.log("DB Connection failed");
        console.log(error);
        process.exit(1);
    })
}