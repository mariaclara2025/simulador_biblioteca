const express = require('express');
const app = express();
const port = 8080;

function meuMiddleware(req,res,next) {
    console.log('Passei pelo middleware!');
    next();
}

app.use(meuMiddleware);

app.get('/', (req,res) =>{
    res.send('Olá, Biblioteca!');
});

app.listen(port, () =>{
    console.log(`Servidor rodando na porta: http://localhost:${port}`);
});
