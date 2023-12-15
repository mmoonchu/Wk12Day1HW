const express = require('express');
const app = express();
const pokemon = require('./models/pokemon');
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
let port = 3000;

app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
})
app.get('/pokemon', (req, res) => {
    res.render('Index', {
        pokemonProp: pokemon
    });
})

app.get('/pokemon/new', (req, res) => {
    res.render('New');
})
app.post('/pokemon', (req, res) => {
    req.body.isAPokemon = true;
    pokemon.push(req.body);
    res.redirect('/pokemon');
})
app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {
        pokemonProp: pokemon
        [req.params.id]
    });
})

// run
app.listen(port, (req, res) => {
    console.log(`server be running`);
})