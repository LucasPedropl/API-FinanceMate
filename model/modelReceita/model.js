const Sequelize = require('sequelize');
const database = require('../../db/db');
const Categoria = require('../modelCategoria/model');
const Usuario = require('../modelUsuario/model');

const Receita = database.define(
	'Receita',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		descricao: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		valor: {
			type: Sequelize.FLOAT,
			allowNull: false,
		},
		data: {
			type: Sequelize.DATE,
			allowNull: false,
		},
		categoriaId: {
			type: Sequelize.INTEGER,
			references: {
				model: Categoria,
				key: 'id',
			},
		},
		usuarioId: {
			type: Sequelize.INTEGER,
			references: {
				model: Usuario,
				key: 'id',
			},
			allowNull: false,
		},
	},
	{
		tableName: 'Receitas',
	}
);

module.exports = Receita;
