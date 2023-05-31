const autorNegocio = require("../negocio/autor_negocio");

async function listar(req, res) {    
    //Obtem os dados request
    //Trata a funcionalidade de negocio
    try{
        console.log(">> Controller 1")
        const listaAutor = await autorNegocio.listar();
        //Gera o response adequadamente
        console.log(">> Controller 2")
        res.json(listaAutor);  
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
        const autor = await autorNegocio.buscarPorId(id);
        //Gera o response adequadamente  
        res.json(autor);
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
    const autor = req.body;
    //Trata a funcionalidade de negocio
    try{ 
        const autorInserido = await autorNegocio.inserir(autor);
        //Gera o response adequadamente  
        res.status(201).json(autorInserido);
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
    const autor = req.body;

    //Trata a funcionalidade de negocio
    try{ 
        const autorAtualizado = await autorNegocio.atualizar(id, autor);
        //Gera o response adequadamente  
        res.json(autorAtualizado);
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
        const autor = await autorNegocio.deletar(id);
        //Gera o response adequadamente  
        res.json(autor);
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