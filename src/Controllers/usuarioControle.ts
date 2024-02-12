

const UserService = require('../Service/userService');



module.exports = {
    async create(req, res) {
        try {
            const {
                cnpj,
                empresa,
                email,
                senha,

            } = req.body;

            const response = await UserService.create(cnpj, empresa, senha, email);
             
          
            return res.json(response);
        } catch (error) {

            console.log(error);
            return res.json({ success: false, message: 'failed to create user' })
        }
    },
    async index(req, res) {
        try {
            const response = await UserService.index();

            return res.json(response);

        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'erro de buscar' })
        }

    },

    async show(req, res) {
        try {
            const {
                id,
            } = req.params;

            const response = await UserService.show(id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'erro de buscar' })
        }
    },

    async update(req, res) {
        try {
            const {
                id,
            } = req.params;

            const {
                cnpj,
                empresa,
                senha,
            } = req.body;

            const response = await UserService.update(id, cnpj, empresa);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'não foi possível criar o usuário' })
        }
    },

    async delete(req, res) {
        try {
            const {
                id,
            } = req.params;

            const response = await UserService.delete(id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'falha' })
        }
    },
};
