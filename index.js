const express = require('express');
const dotenv=require('dotenv')

const {generate,verify}=require('./handler')
const app = express();

dotenv.config();

let PORT =process.env.PORT ;

app.post("/generate",generate)

app.get("/verify",verify)

app.listen(PORT,()=>{
    console.log('Server is running on port ', PORT)
});

 
  
 
