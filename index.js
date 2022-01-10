const express = require('express');
require('dotenv').config()
const db = require('./db.config')
//route
const userRoute =require('./routes/Users')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

db.connect((err,res)=>{
    if (err) throw err
    console.log("connected");
})



app.get('/',(req,res)=>res.send("Developer Routes Api"))

app.use('/api/v1/users',userRoute)



app.listen(process.env.PORT, () => {
    console.log(`Server started on 3000`);
});