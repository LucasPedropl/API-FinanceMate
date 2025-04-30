const Banco = require('../model/modelBanco/model');

module.exports = class BancoController {
	// CREATE
	static async BancoCreate(req, res) {
		const { nome, cor, usuarioId } = req.body;

		const bancoExistente = await Banco.findOne({
			where: { nome, usuarioId },
		});
		if (bancoExistente) {
			return res.status(400).json({ message: 'Já existe um banco com esse nome.' });
		}

		const banco = { nome, cor, usuarioId };
		await Banco.create(banco);
		res.json({ message: 'Banco cadastrado com sucesso' });
	}

	// READ
	static async BancoListar(req, res) {
		const { usuarioId } = req.params;
		const bancos = await Banco.findAll({
			where: { usuarioId },
			raw: true,
		});
		res.json(bancos);
	}

	// UPDATE
	static async BancoUpdate(req, res) {
		const id = req.params.id;
		const { nome, cor } = req.body;

		await Banco.update({ nome, cor }, { where: { id } });
		res.json({ message: 'Banco atualizado com sucesso!' });
	}

	// DELETE
	static async BancoDelete(req, res) {
		const id = req.params.id;
		await Banco.destroy({ where: { id } });
		res.json({ message: 'Banco excluído com sucesso!' });
	}
};
