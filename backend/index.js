// import mongoose from "mongoose";
// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";

// const app = express();
// const url ="mongodb+srv://abdulmoiz:mongodb1422002@cluster0.uf6jhom.mongodb.net/mydatabase?retryWrites=true&w=majority";

// mongoose.connect(url, {useNewUrlParser: true, UseUnifiedTopology:true})
// .then(()=> console.log("Database Connected"));
// app.listen(5000);


// app.use(cors());
// app.use(bodyParser.json({extended : true}));
// app.use(bodyParser.urlencoded({extended : true}));
// app.use('/Signup', usersController);
// app.use('/Table', usersController);







import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import loginData from "./Routes/logindata.js";
import addProductDetails from './Routes/shopproductsdata.js'

const app = express();
const url = "mongodb+srv://abdulmoiz:mongodb1422002@cluster0.uf6jhom.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url,{useNewUrlParser: true, UseUnifiedTopology:true})
.then(() => console.log("Successfully connected to Data Base"));
app.listen(5000);

app.use(cors({
    origin:["https://simister-project-sznv.vercel.app"],
    methods:["POST","GET" , "DELETE" , "UPDATE"],
    credentials:true
  }
  ));
app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/Add_Form', addProductDetails);
app.use('/View_Form', addProductDetails);
app.use('/Signup', loginData);
app.use('/Customers', loginData);
app.use("/Images",express.static("Images"));
app.get("/",(req,res)=>{
  res.send("running");
});