const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const conn = require('./db/conn');
conn();

const routes = require('./routes/routes');
app.use('/', routes);


app.listen(3001, () => {
    console.log("Servidor iniciado!");
})
// app.get('/', (req, res) => {
    
//     res.send('Hello World!');

// })
