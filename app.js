const express = require('express');
const clienteRota = require('./rota/cliente_rota')
const loginRota = require('./rota/login_rota')
const authMiddleware = require('./middleware/auth_middleware')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/login", loginRota);

app.use("/api/hello", function(req, res) {
    res.send("Hello World!");
})

//A partir daqui aplica o Middleware
app.use(authMiddleware.verificarToken);

app.use("/api/clientes", clienteRota);

app.listen (3000, () => { 
    console.log("Iniciando o servidor...");
})