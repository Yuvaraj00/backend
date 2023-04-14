const mongoose=require('mongoose')
const express= require('express')
const file = express();
const routes = require('./Router/router')
                          //6omYYjYr13a31nbv
file.use ('/users',routes)
mongoose.connect('mongodb+srv://yuvarajnagarajan546:6omYYjYr13a31nbv@cluster0.ydeumpt.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
console.log("Database connect")
})
.then(()=> {
  file.listen(2002)
})

