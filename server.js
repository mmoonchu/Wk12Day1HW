const express = require('express');
const app = express();
let port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
})

// run
app.listen(port, () => {
    console.log(`server be running`);
})