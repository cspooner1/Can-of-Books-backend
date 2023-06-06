'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bookModel = require("./books");
const { default: mongoose, connect } = require('mongoose')

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
    .then(() => { console.log('Connected Successful')})
  

app.get('/books', async (request, response) => {
  let allBooks =await bookModel.find();
  response.send(allBooks)
})

app.get('/test', async (request, response) => {
  await mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
    .catch((err) => {
      console.log(err.message)
    })
  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
