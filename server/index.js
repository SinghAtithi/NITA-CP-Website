const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app = express();

dotenv.config({ path: './.env' })

mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true ,useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  
app.use(express.json())

const blogRouter =  require('./routes/blog');

app.use('/blog', blogRouter);

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})