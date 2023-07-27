const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const prisma = require("./prisma/index")
require("dotenv").config();
app.use(express.json())
  
app.get("/",(req,res)=>{
    res.status(200).json("Hello world");
})
app.post("/signup",async(req,res)=>{
    const {email,password,name} = req.body;
    const createNull = await prisma.user.create({
        data: {
          name,email,password
        },
      })
      return res.status(200).json("User created");
})

app.listen(300,()=>console.log("Port 300") );
