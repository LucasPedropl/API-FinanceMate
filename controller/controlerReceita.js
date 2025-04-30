const Receita = require('../model/modelReceita/model');

module.exports = class ReceitaController {
	// CREATE
	static async ReceitaCreate(req, res) {
		const { descricao, valor, data, categoriaId, usuarioId } = req.body;

		const receita = { descricao, valor, data, categoriaId, usuarioId };
		await Receita.create(receita);
		res.json({ message: 'Receita cadastrada com sucesso!' });
	}

	// READ
	static async ReceitaListar(req, res) {
		const { usuarioId } = req.params;
		const { descricao, data, categoriaId } = req.query;

		const where = { usuarioId };
		if (descricao) where.descricao = descricao;
		if (data) where.data = data;
		if (categoriaId) where.categoriaId = categoriaId;

		const receitas = await Receita.findAll({ where, raw: true });
		res.json(receitas);
	}

	// UPDATE
	static async ReceitaUpdate(req, res) {
		const id = req.params.id;
		const { descricao, valor, data, categoriaId } = req.body;

		await Receita.update({ descricao, valor, data, categoriaId }, { where: { id } });
		res.json({ message: 'Receita atualizada com sucesso!' });
	}

	// DELETE
	static async ReceitaDelete(req, res) {
		const id = req.params.id;
		await Receita.destroy({ where: { id } });
		res.json({ message: 'Receita excluída com sucesso!' });
	}
};
