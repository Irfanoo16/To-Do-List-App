const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

const ConnectDB = async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://Irfan:zFIOvmhcnPqVk3yo@cluster0.xrr91kj.mongodb.net/');
        console.log("Connected to mongodb successfully");
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}
ConnectDB();




app.get('/get', (req, res) => {
    TodoModel.find()
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    TodoModel.findByIdAndUpdate({ _id: id }, { done: true })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    TodoModel.findByIdAndDelete({ _id: id }, { done: true })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})


app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
        .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('server is Running');

})
