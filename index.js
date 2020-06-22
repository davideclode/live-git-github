const express = require('express');

const app = express();
// const port = 3000

app.get('/teste', (req, res) => {
    res.json({ hello: "Primeiro teste da aplicação" });
});

app.listen(3333);
// app.listen(port, () => console.log(`Example app listening on port port!`))