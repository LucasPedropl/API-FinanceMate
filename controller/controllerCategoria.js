const Categoria = require('../model/modelCategoria/model');

module.exports = class CategoriaController {
	// CREATE
	static async CategoriaCreate(req, res) {
		const { nome, cor, tipo, usuarioId } = req.body;

		const categoriaExistente = await Categoria.findOne({
			where: { nome, tipo, usuarioId },
		});
		if (categoriaExistente) {
			return res.status(400).json({ message: 'Já existe uma categoria com esse nome e tipo.' });
		}

		const categoria = { nome, cor, tipo, usuarioId };
		await Categoria.create(categoria);
		res.json({ message: 'Categoria cadastrada com sucesso' });
	}

	// READ
	static async CategoriaListar(req, res) {
		const { usuarioId, tipo } = req.params;
		const categorias = await Categoria.findAll({
			where: { usuarioId, tipo },
			raw: true,
		});
		res.json(categorias);
	}

	// UPDATE
	static async CategoriaUpdate(req, res) {
		const id = req.params.id;
		const { nome, cor, tipo } = req.body;

		await Categoria.update({ nome, cor, tipo }, { where: { id } });
		res.json({ message: 'Categoria atualizada com sucesso!' });
	}

	// DELETE
	static async CategoriaDelete(req, res) {
		const id = req.params.id;
		const categoria = await Categoria.findByPk(id);

		// Impede exclusão das categorias padrão
		if (categoria && categoria.nome === 'Sem Categoria' && (categoria.tipo === 'receita' || categoria.tipo === 'despesa')) {
			return res.status(400).json({ message: 'Não é permitido excluir a categoria padrão.' });
		}

		await Categoria.destroy({ where: { id } });
		res.json({ message: 'Categoria excluída com sucesso!' });
	}
};
