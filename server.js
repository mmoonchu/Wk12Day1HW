const express = require('express');
const app = express();
const pokemon = require('./models/pokemon');
let port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
})
app.get('/pokemon', (req, res) => {
    res.send(pokemon);
})

// run
app.listen(port, () => {
    console.log(`server be running`);
})