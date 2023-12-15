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
        pokemons: pokemon
    });
})

// run
app.listen(port, (req, res) => {
    console.log(`server be running`);
})