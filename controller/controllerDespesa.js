const Despesa = require('../model/modelDespesa/model');

modulee.exports = class DespesaController {
	//CREATE
	static async DespesaCreate(req, res) {
		const { descricao, valor, data, tipo, categoriaId } = req.body;

		const despesa = { descricao, valor, data, tipo, categoriaId, usuarioId };

		await Despesa.create(despesa);
		res.json({ message: 'Despesa cadastrada com sucesso!' });
	}

	//READ
	static async DespesaListar(req, res) {
		const { usuarioId } = req.params;
		const { nome, tipo, data, categoriaId } = req.query;

		// Monta o filtro dinamicamente
		const where = { usuarioId };
		if (nome) where.descricao = nome;
		if (tipo) where.tipo = tipo;
		if (data) where.data = data;
		if (categoriaId) where.categoriaId = categoriaId;

		const despesas = await Despesa.findAll({
			where,
			raw: true,
		});
		res.json(despesas);
	}

    //UPDATE
    static async DespesaUpdate(req, res){
        const id = req.params.id;
        const { descricao, valor, data, tipo, categoriaId } = req.body;

        await Despesa.update({ descricao, valor, data, tipo, categoriaId }, { where: { id } });
        res.json({ message: 'Despesa atualizada com sucesso!' });
    }

    //DELETE
    static async DespesaDelete(req, res){
        const id = req.params.id;
        await Despesa.destroy({ where: { id } });
        res.json({ message: 'Despesa excluída com sucesso!' });
    }
};
