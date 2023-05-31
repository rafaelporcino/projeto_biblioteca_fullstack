const emprestimoNegocio = require("../negocio/emprestimo_negocio");

async function listar(req, res) {    
    //Obtem os dados request
    //Trata a funcionalidade de negocio
    try{
        console.log(">> Controller 1")
        const listaemprestimos = await emprestimoNegocio.listar();
        //Gera o response adequadamente
        console.log(">> Controller 2")
        res.json(listaemprestimos);  
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
        const emprestimo = await emprestimoNegocio.buscarPorId(id);
        //Gera o response adequadamente  
        res.json(emprestimo);
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
    const emprestimo = req.body;
    //Trata a funcionalidade de negocio
    try{ 
        const emprestimoInserido = await emprestimoNegocio.inserir(emprestimo);
        //Gera o response adequadamente  
        res.status(201).json(emprestimoInserido);
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
    const emprestimo = req.body;

    //Trata a funcionalidade de negocio
    try{ 
        const emprestimoAtualizado = await emprestimoNegocio.atualizar(id, emprestimo);
        //Gera o response adequadamente  
        res.json(emprestimoAtualizado);
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
        const emprestimo = await emprestimoNegocio.deletar(id);
        //Gera o response adequadamente  
        res.json(emprestimo);
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