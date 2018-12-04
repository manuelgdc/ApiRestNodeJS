//API DE NUMEROS ALEATORIOS

const express = require('express');
//inicializar
const app = express()

app.get('/', () => {
    res.send('index page');
});

app.get('/random/:numeroInicial/:numeroFinal', (req, res) => {
    const min = parseInt(req.params.numeroInicial);
    const max = parseInt(req.params.numeroFinal);

    if(isNaN(min) || isNaN(max)){
        res.status(404);
        res.json({"error": '404'});
        return;
    }

    const result = Math.floor(Math.random() * (max-min) + min);

    res.json({"randomNumber": result});

 

});

app.listen(3000, () => {
    console.log('server on port 3000');
});