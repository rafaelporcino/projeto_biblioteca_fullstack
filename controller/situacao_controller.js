const situacaoNegocio = require("../negocio/situacao_negocio");

async function listar(req, res) {    
    //Obtem os dados request
    //Trata a funcionalidade de negocio
    try{
        console.log(">> Controller 1")
        const listasituacaos = await situacaoNegocio.listar();
        //Gera o response adequadamente
        console.log(">> Controller 2")
        res.json(listasituacaos);  
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
        const situacao = await situacaoNegocio.buscarPorId(id);
        //Gera o response adequadamente  
        res.json(situacao);
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
    const situacao = req.body;
    //Trata a funcionalidade de negocio
    try{ 
        const situacaoInserido = await situacaoNegocio.inserir(situacao);
        //Gera o response adequadamente  
        res.status(201).json(situacaoInserido);
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
    const situacao = req.body;

    //Trata a funcionalidade de negocio
    try{ 
        const situacaoAtualizado = await situacaoNegocio.atualizar(id, situacao);
        //Gera o response adequadamente  
        res.json(situacaoAtualizado);
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
        const situacao = await situacaoNegocio.deletar(id);
        //Gera o response adequadamente  
        res.json(situacao);
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