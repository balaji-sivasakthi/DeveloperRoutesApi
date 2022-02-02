const express = require('express');
const mongoose =  require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

//route
const userRoute =require('./routes/Users')
const orderRoute =require('./routes/Order')
const courseRoute =require('./routes/Course')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(cors())

mongoose.connect(process.env.DB_URI)
.then(result=>{
    console.log('Connected');
   
}).catch(err=>{
    console.log(err);
})


app.get('/',(req,res)=>res.send("Developer Routes Api"))

app.use('/api/v1/users',userRoute)
app.use('/api/v1/orders',orderRoute)
app.use('/api/v1/courses',courseRoute)


app.listen(process.env.PORT, () => {
    console.log(`Server started on 3000`);
});
