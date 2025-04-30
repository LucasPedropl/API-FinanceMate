const Usuario = require('../model/modelUsuario/model');

module.exports = class UsuarioController {
	// CREATE
	static async UsuarioCreate(req, res) {
		const { nome, email, senha } = req.body;

		const usuarioExistente = await Usuario.findOne({ where: { email } });
		if (usuarioExistente) {
			return res.status(400).json({ message: 'Já existe um usuário com esse e-mail.' });
		}

		const usuario = { nome, email, senha };
		await Usuario.create(usuario);
		res.json({ message: 'Usuário cadastrado com sucesso!' });
	}

	// READ
	static async UsuarioListar(req, res) {
		const usuarios = await Usuario.findAll({ raw: true });
		res.json(usuarios);
	}

	// UPDATE
	static async UsuarioUpdate(req, res) {
		const id = req.params.id;
		const { nome, email, senha } = req.body;

		const usuarioExistente = await Usuario.findOne({ where: { email } });
		if (usuarioExistente && usuarioExistente.id != id) {
			return res.status(400).json({ message: 'Já existe um usuário com esse e-mail.' });
		}

		await Usuario.update({ nome, email, senha }, { where: { id } });
		res.json({ message: 'Usuário atualizado com sucesso!' });
	}

	// DELETE
	static async UsuarioDelete(req, res) {
		const id = req.params.id;
		await Usuario.destroy({ where: { id } });
		res.json({ message: 'Usuário excluído com sucesso!' });
	}

    static async UsuarioLogin(req, res) {
        const { email, senha } = req.body;

        const usuario = await Usuario.findOne({ where: { email, senha } });
        if (!usuario) {
            return res.status(401).json({ message: 'E-mail ou senha inválidos.' });
        }

        res.json({ message: 'Login realizado com sucesso!', usuario });
    }
};
