const usuarioNegocio = require("../negocio/usuario_negocio");

async function listar(req, res) {    
    //Obtem os dados request
    //Trata a funcionalidade de negocio
    try{
        console.log(">> Controller 1")
        const listausuarios = await usuarioNegocio.listar();
        //Gera o response adequadamente
        console.log(">> Controller 2")
        res.json(listausuarios);  
    } 
    catch(err) {
        res.status(500).json({erro: err})
    }
}

async function buscarPorId(req, res) {    
    //Obtem os dados request (e da URI)
    const id = req.params.id;
    try{ 
        //Trata a funcionalidade de negocio
        const usuario = await usuarioNegocio.buscarPorId(id);
        //Gera o response adequadamente  
        res.json(usuario);
    }
    catch(err) {
        if(err.status) {
            res.status(err.status).json(err);
        }
        else {
            res.status(500).json({message: "Erro nao identificado"});
        }
    }
}

async function inserir(req, res) {    
    //Obtem os dados request
    const usuario = req.body;
    //Trata a funcionalidade de negocio
    try{ 
        const usuarioInserido = await usuarioNegocio.inserir(usuario);
        //Gera o response adequadamente  
        res.status(201).json(usuarioInserido);
    } 
    catch (err) {
        if(err.status) {
            res.status(err.status).json(err);
        }
        else {
            res.status(500).json({message: "Erro nao identificado"});
        }
    }
}

async function atualizar(req, res) {    
    //Obtem os dados request
    const id = req.params.id;
    const usuario = req.body;

    //Trata a funcionalidade de negocio
    try{ 
        const usuarioAtualizado = await usuarioNegocio.atualizar(id, usuario);
        //Gera o response adequadamente  
        res.json(usuarioAtualizado);
    } 
    catch (err) {
        if(err.status) {
            res.status(err.status).json(err);
        }
        else {
            res.status(500).json({message: "Erro nao identificado"});
        }
    }
}

async function deletar(req, res) {    
    //Obtem os dados request
    const id = req.params.id;
    try{ 
        //Trata a funcionalidade de negocio
        const usuario = await usuarioNegocio.deletar(id);
        //Gera o response adequadamente  
        res.json(usuario);
    }
    catch(err) {
        if(err.status) {
            res.status(err.status).json(err);
        }
        else {
            res.status(500).json({message: "Erro nao identificado"});
        }
    }
}

module.exports = {
    listar,
    buscarPorId,
    inserir,
    atualizar,
    deletar
}