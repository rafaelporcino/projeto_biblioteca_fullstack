const express = require('express');
const clienteRota = require('./rota/cliente_rota')
const autorRota = require('./rota/autor_rota')
const emprestimoRota = require('./rota/emprestimo_rota')
const livroRota = require('./rota/livro_rota')
const situacaoRota = require('./rota/situacao_rota')
const usuarioRota = require('./rota/usuario_rota')
const loginRota = require('./rota/login_rota')
//const authMiddleware = require('./middleware/auth_middleware')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Adicionar os cabeçalhos Access-Control-Allow-Origin
app.use((req, res, next) => {
    //res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001/");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept" );
    next();
  });

app.use("/api/login", loginRota);

app.use("/api/hello", function(req, res) {
    res.send("Hello World!");
})

//A partir daqui aplica o Middleware
//app.use(authMiddleware.verificarToken);

app.use("/api/clientes", clienteRota);
app.use("/api/autor", autorRota);
app.use("/api/emprestimo", emprestimoRota);
app.use("/api/livro", livroRota);
app.use("/api/situacao", situacaoRota);
app.use("/api/usuarios", usuarioRota);

app.listen (3000, () => { 
    console.log("Iniciando o servidor...");
})
