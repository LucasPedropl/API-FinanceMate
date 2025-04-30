const Sequelize = require('sequelize');
const database = require('../../db/db');
const Usuario = require('../modelUsuario/model');

const Banco = database.define(
	'Banco',
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
			allowNull: true,
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
	{ tableName: 'bancos' }
);

module.exports = Banco;
