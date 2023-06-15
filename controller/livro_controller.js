const livroNegocio = require("../negocio/livro_negocio");

async function listar(req, res) {    
    //Obtem os dados request
    //Trata a funcionalidade de negocio
    try{
        console.log(">> Controller 1")
        const listalivros = await livroNegocio.listar();
        //Gera o response adequadamente
        console.log(">> Controller 2")
        res.json(listalivros);  
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
        const livro = await livroNegocio.buscarPorId(id);
        //Gera o response adequadamente  
        res.json(livro);
    }
    catch(err) {
        if(err.status) {
            res.status(err.status).json(err);
        }
        else {
            res.status(500).json({message: "Erro nao identificado Busca Oid Livro"});
        }
    }
}

async function inserir(req, res) {    
    //Obtem os dados request
    const livro = req.body;
    //Trata a funcionalidade de negocio
    try{ 
        const livroInserido = await livroNegocio.inserir(livro);
        //Gera o response adequadamente  
        res.status(201).json(livroInserido);
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
    const livro = req.body;

    //Trata a funcionalidade de negocio
    try{ 
        const livroAtualizado = await livroNegocio.atualizar(id, livro);
        //Gera o response adequadamente  
        res.json(livroAtualizado);
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
        const livro = await livroNegocio.deletar(id);
        //Gera o response adequadamente  
        res.json(livro);
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