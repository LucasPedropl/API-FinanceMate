const express = require('express');
const router = express.Router();
const Usuario = require('../controller/controllerUsuario');
const Banco = require('../controller/controllerBanco');
const Cartao = require('../controller/controllerCartao');
const Categoria = require('../controller/controllerCategoria');
const Despesa = require('../controller/controllerDespesa');
const Receita = require('../controller/controlerReceita');

router.get('/', (req, res) => {
	return res.json({ message: 'FinanceMate' });
});

//ROTAS DE USUARIO
router.post('/cadastrar', Usuario.UsuarioCreate);
router.put('/update/:id', Usuario.UsuarioUpdate);
router.delete('/delete/:id', Usuario.UsuarioDelete);
router.post('/login', Usuario.UsuarioLogin);

//ROTAS DE BANCO
router.get('/bancolistar', Banco.BancoListar);
router.post('/bancoCreate', Banco.BancoCreate);
router.put('/bancoUpdate/:id', Banco.BancoUpdate);
router.delete('/bancoDelete/:id', Banco.BancoDelete);

//ROTAS DE CARTAO
router.get('/cartaoListar', Cartao.CartaoListar);
router.post('/cartaoCreate', Cartao.CartaoCreate);
router.put('/cartaoUpdate/:id', Cartao.CartaoUpdate);
router.delete('/cartaoDelete/:id', Cartao.CartaoDelete);

//ROTAS DE CATEGORIA
router.get('/categoriaListar', Categoria.CategoriaListar);
router.post('/categoriaCreate', Categoria.CategoriaCreate);
router.put('/categoriaUpdate/:id', Categoria.CategoriaUpdate);
router.delete('/categoriaDelete/:id', Categoria.CategoriaDelete);

//ROTAS DE DESPESA
router.get('/despesaListar', Despesa.DespesaListar);
router.post('/despesaCreate', Despesa.DespesaCreate);
router.put('/despesaUpdate/:id', Despesa.DespesaUpdate);
router.delete('/despesaDelete/:id', Despesa.DespesaDelete);

//ROTAS DE RECEITA
router.get('/receitaListar', Receita.ReceitaListar);
router.post('/receitaCreate', Receita.ReceitaCreate);
router.put('/receitaUpdate/:id', Receita.ReceitaUpdate);
router.delete('/receitaDelete/:id', Receita.ReceitaDelete);

module.exports = router;
