import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react';

import api from '../../services/api';

import './styles.css';
import Nav from '../Nav';

export default function UpdateContact() {

    const userId = localStorage.getItem('userId');

    const id = localStorage.getItem('id');
    const [name, setName] = useState(localStorage.getItem('name'));
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [phone, setPhone] = useState(localStorage.getItem('phone'));
    const [github_username, setGitHub] = useState(localStorage.getItem('github_username'));
    const [linkedin_username, setLinkedin] = useState(localStorage.getItem('linkedin_username'));


    const history = useHistory();
      
    async function handleUpdateContact(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            phone,
            github_username,
            linkedin_username,
        };
    
        try {
            await api.post(`contacts/${id}`, data, {
                headers: {
                    Authorization: userId,
                }
            });
            
            history.push('/profile');
        } catch (error) {
            alert('Erro ao atualizar contato.' + error)
        };

    }

    return (
        <div>
            <Nav /> 
            <div className="update-container">
            <div className="content">
                <section>
                    <h1>Atualizar Contato</h1>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#1316EB" />
                         Voltar para home                   
                    </Link>
                </section> 
                                 
                <form onSubmit={handleUpdateContact} className="form">
                 
                    <input placeholder="Nome" 
                           value={name} 
                           onChange={e => setName(e.target.value)}
                    />
                    <input placeholder="Telefone" 
                           value={phone} 
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