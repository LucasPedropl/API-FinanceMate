const express = require('express');
const router = express.Router();
const Usuario = require('./model/modelUsuario/model');
const Banco = require('./model/modelBanco/model');
const Cartao = require('./model/modelCartao/model');
const Categoria = require('./model/modelCategoria/model');
const Despesa = require('./model/modelDespesa/model');
const Receita = require('./model/modelReceita/model');

router.get('/', (req, res) => {
    return res.json({ message: 'FinanceMate' });
})

//ROTAS DE USUARIO
router.post('/cadastrar', Usuario.UsuarioCreate);
router.put('/update/:id', Usuario.UsuarioUpdate);
router.delete('/delete/:id', Usuario.UsuarioDelete);
router.post('/login', Usuario.UsuarioLogin);

//ROTAS DE BANCO
router.get()

