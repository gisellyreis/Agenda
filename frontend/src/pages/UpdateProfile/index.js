import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import Nav from '../Nav';

export default function UpdateProfile() {

    const userId = localStorage.getItem('userId');

      
    const [user_name, setUserName] = useState(localStorage.getItem('userName'));
    const [email, setEmail] = useState(localStorage.getItem('userEmail'));
    const [phone, setPhone] = useState(localStorage.getItem('userPhone'));
    const [github_username, setGitHub] = useState(localStorage.getItem('userGit'));
    const [linkedin_username, setLinkedin] = useState(localStorage.getItem('userLinkedin'));

    const telefone = localStorage.getItem('userPhone');
    const history = useHistory();


    async function handleUpdate(e) {
        e.preventDefault();

        const data = {
            user_name,
            email,
            phone,
            github_username,
            linkedin_username,
        };

        try {
            await api.post('login/update', data, {
                headers: {
                    Authorization: userId,
                }
            });

            history.push('/profile');
            
        } catch (error) {
            alert('Erro ao atualizar perfil')
        }

    };

    return (
        <div>
            <Nav />
            <div className="update-container">
            <div className="content">
                <section>
                    <h1>Atualizar Perfil</h1>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#1316EB" />
                         Voltar para home                   
                    </Link>
                </section>

                <form onSubmit={handleUpdate} className="form">
                    <input placeholder="Nome" 
                           value={user_name} 
                           onChange={e => setUserName(e.target.value)}
                    />
                    <input placeholder="Telefone" 
                           value={telefone} 
                           onChange={e => setPhone(e.target.value)}
                    />
                    <input placeholder="E-mail" 
                           value={email} 
                           onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="GitHub Username" 
                           value={github_username}
                           onChange={e => setGitHub(e.target.value)}
                    />
                    <input placeholder="Linkedin Username" 
                           value={linkedin_username} 
                           onChange={e => setLinkedin(e.target.value)}
                    />

                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
        </div>
    );
}