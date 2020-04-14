const connection = require('../database/connection');
 
module.exports = {
    async search(req, res) {
        const user_id = req.headers.authorization;
        const { name } = req.query;

        const contacts = await connection('contacts')
        .where({
            user_id: user_id,
            name: name
        })
        .select('*');

        return res.json(contacts);
    },

    async contact(req, res) {
        const { id } = req.params;
        const user_id = req.headers.authorization;

        const contact = await connection('contacts')
        .where('id', id)
        .first();

        if(contact.user_id != user_id) {
            return res.status(401).json({error: 'Operation not permitted'});
        }

        const data = await connection('contacts')
        .where('id', id)
        .first()

        return res.json(data);
       
    },

}; 