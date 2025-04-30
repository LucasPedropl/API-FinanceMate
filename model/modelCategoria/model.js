const Sequelize = require('sequelize');
const database = require('../../db/db');
const Usuario = require('../modelUsuario/model');

const Categoria = database.define(
	'Categoria',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nome: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		cor: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		tipo: {
			type: Sequelize.ENUM('receita', 'despesa'),
			allowNull: false,
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
		tableName: 'categorias',
	}
);

module.exports = Categoria;
