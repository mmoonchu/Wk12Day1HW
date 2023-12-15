const express = require('express');
const app = express();
const pokemon = require('./models/pokemon');
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
let port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
})
app.get('/pokemon', (req, res) => {
    res.render('Index', {
        pokemonProp: pokemon
    });
})
app.get('/pokemon/:id', (req, res) => {
    res.send(req.params.id);
})

// run
app.listen(port, (req, res) => {
    console.log(`server be running`);
})