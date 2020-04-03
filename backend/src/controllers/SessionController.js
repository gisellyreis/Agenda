const connection = require('../database/connection');
const axios = require('axios');

module.exports = {
    async index(req, res) {
        const id = req.headers.authorization;
        let contact = [];
       
        const user = await connection('users')
        .where('id', id)
        .first();


        if(user.id != id) {
            return res.status(401).json({error: 'Operation Not Permitted'});
        }

        if(!user.github_username) {
            return res.status(200).json({error: 'GitHub Username not found'});
        }

        const apiResponse = await axios.get(`https://api.github.com/users/${user.github_username}`);
            // console.log(apiResponse.data);

            const { followers_url , followers} = apiResponse.data;

            const follower = await axios.get(`${followers_url}`);

            // console.log(followers); -> numero de seguidores
              // matriz de followers
            for(var i=0; i< followers; i++) {
                var add = contact.push([follower.data[i].login, follower.data[i].html_url, follower.data[i].avatar_url]);
            }
           
            for(var i=0; i< followers; i++) {
                await connection('contacts')
                .insert({
                    user_id: id,
                    name: contact[i][0],
                    phone: " ",
                    github_username: contact[i][0],
                    avatar_url: contact[i][2]
                });

            }
            
           // console.log(contact);
          //  console.log(avatar_url);

        return res.status(200).send();

    },
}