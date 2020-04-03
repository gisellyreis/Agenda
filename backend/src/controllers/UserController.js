const connection = require('../database/connection');
const crypto = require('crypto');
const axios = require('axios');

module.exports = {
// Apenas para teste, Lista os usuarios, não vai para versão final

    async test(req, res) {
        //const ong_id = req.headers.authorization;

        const users = await connection('users')
        .select('*');

        return res.json(users);
    },

    async index(req, res) {
        const { user_name, password } = req.body;
    //  const user_id = req.headers.authorization;

        const user = await connection('users')
        .where({
            user_name: user_name,
            password: password
        })
        .select('id', 'user_name')
        .first();

        if(!user) {
            return res.status(400).json({error: 'Invalid username or password'});
        }
        
        return res.json(user);
    },

    async create(req, res) {
        const { user_name, password, email, phone } = req.body;

        // console.log(user_name);
        // Filtrando usuario por nome
        const testUserName = await connection('users')
        .where({
            user_name: user_name,
            email: email 
        })
        .first();

       //  res.json(testUserName);
        
        if(testUserName) {
        //  console.log("Usuario já existe");
            
            return res.json({message: 'There is already a user with this username and password'});
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

            return res.status(200).json({message: 'Account seccessfully created', id: id});
           
        //  return res.status(400).json({error: 'No User found with this name'});
    
    },

    async update(req, res) {
        const { user_name, password, email, phone, github_username, linkedin_username } = req.body;
        const id = req.headers.authorization;
       
        const user = await connection('users')
        .where('id', id)
        .select('id')
        .first();

        if(!user) {
            return res.status(400).json({error: 'Invalid password'});
        }

        if(user.id != id) {
            return res.status(401).json({error: 'Operation Not Permitted'});
        }

        if(github_username) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            // console.log(apiResponse.data);

            const { avatar_url } = apiResponse.data;

            await connection('users')
            .update({
                avatar_url
            });
                
        }


        await connection('users')
        .where('id', id)
        .update({
            user_name, 
            password, 
            email, 
            phone, 
            github_username, 
            linkedin_username
        });

        return res.status(200).json({message: 'Account seccessfully Updated', user});
    },

    
    async delete(req, res) {
        const id = req.headers.authorization;

        const user = await connection('users')
        .where('id', id)
        .first();

        if(!user || user.id != id) {
            return res.status(401).json({error: 'Operation Not Permitted'}); 
        }

        await connection('contacts')
        .where('user_id', id)
        .delete();

        await connection('users')
        .where('id', id)
        .delete();

        return res.status(204).send();
    },
    
}