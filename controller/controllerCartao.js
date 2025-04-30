const Cartao = require('../model/modelBanco/modelCartao');

module.exports = class CartaoController {
	// CREATE
	static async CartaoCreate(req, res) {
		const { limite, fatura, vencimento, bancoId, usuarioId } = req.body;

		const cartao = { limite, fatura, vencimento, bancoId, usuarioId };
		await Cartao.create(cartao);
		res.json({ message: 'Cartão cadastrado com sucesso!' });
	}

	// READ
	static async CartaoListar(req, res) {
		const { usuarioId } = req.params;
		const { bancoId } = req.query;

		const where = { usuarioId };
		if (bancoId) where.bancoId = bancoId;

		const cartoes = await Cartao.findAll({ where, raw: true });
		res.json(cartoes);
	}

	// UPDATE
	static async CartaoUpdate(req, res) {
		const id = req.params.id;
		const { limite, fatura, vencimento } = req.body;

		await Cartao.update({ limite, fatura, vencimento }, { where: { id } });
		res.json({ message: 'Cartão atualizado com sucesso!' });
	}

	// DELETE
	static async CartaoDelete(req, res) {
		const id = req.params.id;
		await Cartao.destroy({ where: { id } });
		res.json({ message: 'Cartão excluído com sucesso!' });
	}
};
