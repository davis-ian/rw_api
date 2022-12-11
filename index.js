
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const TodoListRoutes = require('./routes/api/TodoList.js')
const path = require('path')
require('dotenv').config();

app.use(cors()) // to allow cross origin requests
app.use(bodyParser.json()) // to convert the request into JSON

// Fixes deprectaion error during setup
mongoose.set('strictQuery', false)

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.use('/api/todoList', TodoListRoutes)

app.listen(process.env.PORT, () => console.log(`App listening at http://localhost:${process.env.PORT}`))

