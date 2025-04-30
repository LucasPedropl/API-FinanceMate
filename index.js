const express = require('express');
const app = express();
const database = require('./db/db');
const routes = require('./routes/routes');
const port = 3000;
const Categoria = require('./model/modelCategoria/model');

require('./model/associations');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

database
	.sync()
	.then(async () => {
		console.log('Sincronização com o banco de dados foi bem sucedida.');

		await Categoria.findOrCreate({
			where: { nome: 'Sem Categoria', tipo: 'receita' },
			defaults: {
				cor: '#cccccc',
			},
		});

		await Categoria.findOrCreate({
			where: { nome: 'Sem Categoria', tipo: 'despesa' },
			defaults: {
				cor: '#cccccc',
			},
		});

		app.listen(port, () => {
			console.log(`Servidor rodando na porta ${port}`);
		});
	})
	.catch((erro) => {
		console.log('Houve uma falha ao sincronizar com o banco de dados. ', erro);
	});
