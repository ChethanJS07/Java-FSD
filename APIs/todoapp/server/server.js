const express = require('express');
const connectMongoDB = require('./config/db');
const cors = require('cors');
const todoRoutes = require('./routes/todo');
const todo = require('./models/todo');
const { connect } = require('mongoose');
require('dotenv').config();


const app = express();
app.use(express.json());
const PORT = process.env.PORT||8000;
//mongodb://url:port/?username={}?password={}/db_name
// const connectionString = "MONGO_URL";
//Establish DB connection:
connectMongoDB();
// Cors
app.use(cors({
  origin: [
    'http://localhost:3000'
  ],
  credentials: true
}));
//Routes (end points)
app.use('/api/todo',todoRoutes)

app.listen(PORT,()=>{
  console.log(`Todo app server is listening on Port ${PORT}`);
})