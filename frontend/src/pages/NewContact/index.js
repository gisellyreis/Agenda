import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiGithub } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import Nav from '../Nav';

export default function NewContact() {

    const userId = localStorage.getItem('userId');

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [github_username, setGitHub] = useState('');
    const [linkedin_username, setLinkedin] = useState('');

    async function handleImportGit(e) {
        e.preventDefault();
        try {
            await api.get('profile/gitcontacts', {
                headers: {
                    Authorization: userId,
                }
            });

            history.push('/profile');

        } catch (error) {
            alert('Erro ao importar contatos.')
        }
    }

    async function handleNewContact(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            phone,
            github_username,
            linkedin_username,
        };

        try {
            await api.post('contacts/new', data , {
                headers: {
                    Authorization: userId,
                }
            })

            history.push('/profile');
            
        } catch (error) {
            
        }

    };

    return (
        <div>
            <Nav />
            <div className="contact-container">
            <div className="content">
                <section>
                <h1>Criar novo contato</h1>

                    <Link className="back-link" to="/profile">
                    <button className="but" onClick={handleImportGit} type="button">
                        <FiGithub size={16} color="#1316EB" />
                            Importar do GitHub
                    </button>                           
                    </Link> 

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#1316EB" />
                        Voltar para home                   
                    </Link>
                </section>

                <form onSubmit={handleNewContact} className="form">
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