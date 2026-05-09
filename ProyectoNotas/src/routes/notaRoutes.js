const express = require('express');
const router = express.Router();
const controller = require('../controllers/notaController');

router.post('/', controller.registrarNota);
router.get('/lista',controller.listarNotas);

module.exports = router;