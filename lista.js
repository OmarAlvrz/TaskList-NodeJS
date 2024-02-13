// app.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Lista de tareas (almacenada en memoria, puedes reemplazarla con una base de datos)
const tasks = [];

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/addTask', (req, res) => {
    const newTask = req.body.task;
    tasks.push(newTask);
    console.log('New task added:', newTask);
    res.redirect('/');
});

app.get('/getTasks', (req, res) => {
    res.json(tasks);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
