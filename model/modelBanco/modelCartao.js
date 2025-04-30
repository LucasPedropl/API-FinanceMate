const Sequelize = require('sequelize');
const database = require('../../db/db');
const Banco = require('./model');
const Usuario = require('../modelUsuario/model');

const Cartao = database.define(
	'Cartao',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		limite: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		fatura: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		vencimento: {
			type: Sequelize.DATE,
			allowNull: false,
		},
		bancoId: {
			type: Sequelize.INTEGER,
			references: {
				model: Banco,
				key: 'id',
			},
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
		tableName: 'Cartoes',
	}
);

module.exports = Cartao;
