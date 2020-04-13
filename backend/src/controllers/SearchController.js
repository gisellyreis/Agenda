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
    }
}; 