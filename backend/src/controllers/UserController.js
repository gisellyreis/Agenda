const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
// Apenas para teste, Lista os usuarios, não vai para versão final

    async index(req, res) {
        const user_name = req.body;
        // const user_id = req.headers.authorization;

        const users = await connection('users')
        .select('*');

        res.json(users);
    },

    async create(req, res) {
        const { user_name, password, email, phone } = req.body;

        // console.log(user_name);
        // Filtrando usuario por nome
        const testUserName = await connection('users')
        .where('user_name', user_name)
        .select('*')
        .first();
        
        if(testUserName) {
        //  console.log("Usuario já existe");
            
            return res.json({message: 'There is already a user with this username'});
        }
        //  console.log('Esse usuario não existe');
        // criar handleId = testa se o id é unico
            const id = crypto.randomBytes(4).toString('HEX');
            await connection('users').insert({
                id,
                user_name,
                password,
                email,
                phone,
            })

            return res.status(200).json({error: 'Account seccessfully created'});
           
        //  return res.status(400).json({error: 'No User found with this name'});
    
    },
}