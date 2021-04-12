const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/dashboard'));

app.get('/*', (req, resp) => {
    resp.sendFile(__dirname + '/dist/dashboard/index.html');
})

app.listen(PORT, ()=> {
    console.log("Servidor iniciado na porta " + PORT);
})