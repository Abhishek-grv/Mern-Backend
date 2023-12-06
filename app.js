const express =require('express');
const router=require("./routes/book-routes");
const app=express();
const mongoose=require('mongoose');
const cors=require('cors')

//Middlewares

app.use(express.json());
app.use(cors());
app.use("/books",router);

mongoose.connect("mongodb+srv://admin:gaurav2023@cluster0.ywx34ht.mongodb.net/Book-Store"
).then(()=>{
    console.log("Connected to Databse");
}).then(()=>{
    app.listen(5000);
}).catch((err)=>{
    console.log(err);
});

