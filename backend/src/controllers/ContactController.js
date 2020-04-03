const connection = require('../database/connection');


module.exports = {

    // Adicionar authorização de usuario para o index
    // Só o usuario logado pode ver a lista de contatos

    async index(req, res) {
        const {page = 1} = req.query;

        const [count] = await connection('contacts')
        .count();

        // console.log(count);

        const contacts = await connection('contacts')
        .join('users', 'users.id', '=', 'contacts.user_id')
        .limit(10)
        .offset((page -1) * 10)
        .select([
            'contacts.*',
            'users.user_name',
        ]);

        res.header('X-Total-Count', count['count(*)']);

        return res.json(contacts);
    },

    async create(req, res) {
        const { name, email, phone, github_username, linkedin_username } = req.body;
        const user_id = req.headers.authorization;
       
        const user = await connection('users')
        .where('id', user_id)
        .select('id')
        .first();

        if(!user || user.id != user_id) {
            return res.json({error: 'Operation Not Permitted'});
        }
        

        const [id] = await connection('contacts').insert({
            user_id,
            name, 
            email, 
            phone, 
            github_username, 
            linkedin_username,
        });

        return res.json({ message: 'New contact successfully created', id });

    },

    async update(req, res) {
        const { id } = req.params;
        const user_id = req.headers.authorization;
        const { name, email, phone, github_username, linkedin_username } = req.body;

        const contact = await connection('contacts')
        .where('id', id)
        .select('user_id')
        .first();

        if(contact.user_id != user_id) {
            return res.status(401).json({error: 'Operation not permitted'});
        }

        await connection('contacts')
        .where('id', id)
        .update({
            name, 
            email, 
            phone,
            github_username, 
            linkedin_username,
        });

        return res.json({ message: 'Contact successfully updated', id });
       
    },

    async delete(req, res) {
        const { id } = req.params;
        const user_id = req.headers.authorization;

        const contact = await connection('contacts')
        .where('id', id)
        .select('user_id')
        .first();

        if(contact.user_id != user_id) {
            return res.status(401).json({error: 'Operation not permitted'});
        }

        await connection('contacts')
        .where('id', id)
        .delete();

        return res.status(204).send();
    },

}