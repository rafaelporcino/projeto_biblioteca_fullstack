const express = require("express");
const uauarioController = require("../controller/uauario_controller")

const router = express.Router();

//api/uauarios
router.get('/',uauarioController.listar)
router.get('/:id', uauarioController.buscarPorId)
router.post('/', uauarioController.inserir)
router.put('/:id', uauarioController.atualizar)
router.delete('/:id', uauarioController.deletar)

module.exports = router;
