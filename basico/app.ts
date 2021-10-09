const express = require('express');
const port = 3500;

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <div> 
            <h1> Primera aplicación con Node Js :v </h1>
            <a href="/info"> Información </a>
        </div>
    `);
});

app.get('/info', (req, res) => {
    var data = {
        nombre: 'Saul',
        apellido: 'Grados',
        edad: '19'
    }
    res.send(data);
});

app.listen(port, err => {
    if(err) console.log(err);
    console.log(`server is running in ${port}`);
})