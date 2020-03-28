const express = require('express');

const app = express();

app.get("/", (req, res) => {
    return res.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Danrlei Lucas Klement'
    });
});

app.listen(3333);
