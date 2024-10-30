const express = require('express')

const app = express();

// const path = require('path');

const fs = require('fs');

app.use(express.static('static'));




app.get('/', (req, res) => {
    
    let counter = JSON.parse(fs.readFileSync('./static/mainCounter.json'));
    counter.main++;
    fs.writeFileSync('./static/mainCounter.json', JSON.stringify(counter));
    res.send(`<h1>Добро пожаловать на мой сайт!</h1><p>Количество посещений: ${counter.main} </p>`)
});


app.get('/about', (req, res) => {
    let aboutCounter = JSON.parse(fs.readFileSync('./static/aboutCounter.json'));
    aboutCounter.about++;
    fs.writeFileSync('./static/aboutCounter.json', JSON.stringify(aboutCounter));
    res.send(`<h1>Обо мне</h1><p>Количество посещений: ${aboutCounter.about} </p>`)
})

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})




