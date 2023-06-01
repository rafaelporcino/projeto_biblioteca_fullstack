const express = require("express");
const emprestimoController = require("../controller/emprestimo_controller")

const router = express.Router();

//api/emprestimos
router.get('/',emprestimoController.listar)
router.get('/:id', emprestimoController.buscarPorId)
router.post('/', emprestimoController.inserir)
router.put('/:id', emprestimoController.atualizar)
router.delete('/:id', emprestimoController.deletar)

module.exports = router;
