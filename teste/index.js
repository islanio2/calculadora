const express = require('express'); 
const app = express(); 
const port = 3000;

app.get('/calculadora', function(req, res) { 
    const operacao = req.query.operacao; 
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);

    if (!operacao || isNaN(n1) || isNaN(n2)) { 
        return res.status(400).send('Bad request');
    }

    let resultado;

    if (operacao === 'soma') { 
        resultado = n1 + n2; 
    }
    else if (operacao === 'subtracao') { 
        resultado = n1 - n2;
    } else if (operacao === 'multiplicacao') { 
        resultado = n1 * n2; 
    } else if (operacao === 'divisao') {
        if (n2 === 0) {
            return res.status(400).send('Divisao por zero nao permitida'); 
        }
        resultado = n1 / n2;
    } else {
        return res.status(400).send('Operacao invalida'); 
    }

    res.send(`Resultado: ${resultado}`); 
});

app.listen(port, function() {
    console.log(`Servidor rodando na porta ${port}`); 
});
