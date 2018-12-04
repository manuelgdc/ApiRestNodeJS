const express = require('express');
//inicializar
const app = express()

app.get('/', (req, res) => {
    res.send('recibido');
});

app.post('/', (req, res) => {
    res.send('guardando...');
});

app.put('/', (req, res) => {
    res.send('actualizando...');
});

app.delete('/', (req, res) => {
    res.send('borrando...');
});

app.listen(3000, () => {
    console.log('server on port');
});