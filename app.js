const express=require('express');




const app=express();


const port=process.env.port || 3000
const authRoute=require('./routes/auth-route');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require ('cors');

// mongoose.connect('mongodb://localhost:27017/cred',(err)=>{
//     if(err){
//         console.log("Database Not Connected");
//     }
//     else{
//         console.log("DB is connected");
//     }
// })
const dbURI = 'mongodb://localhost:27017/cred';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });
app.use(bodyParser.urlencoded({ extended:false}))




app.use('/auth',authRoute);
app.get('/',(req,res)=>{
    res.send("welcome to server")
})
const corsOptions = {
  origin: 'http://localhost:4200',
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(function(req, res) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
});

app.listen(port,()=>{
    console.log("Node server is connected:", port)
})
