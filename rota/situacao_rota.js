const express = require("express");
const situacaoController = require("../controller/situacao_controller")

const router = express.Router();

//api/situacaos
router.get('/',situacaoController.listar)
router.get('/:id', situacaoController.buscarPorId)
router.post('/', situacaoController.inserir)
router.put('/:id', situacaoController.atualizar)
router.delete('/:id', situacaoController.deletar)

module.exports = router;
