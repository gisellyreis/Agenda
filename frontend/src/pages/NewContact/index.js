import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiGithub } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import Nav from '../Nav';

export default function NewContact() {

    const userId = localStorage.getItem('userId');

    const history = useHistory();

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

                <form onSubmit={() => {}} >
                    <input placeholder="Nome" 
                           value="" 
                           onChange={() => {}}
                    />
                    <input placeholder="Telefone" 
                           value="" 
                           onChange={() => {}}
                    />
                    <input placeholder="E-mail" 
                           value="" 
                           onChange={() => {}}
                    />
                    <input placeholder="GitHub Username" 
                           value="" 
                           onChange={() => {}}
                    />
                    <input placeholder="Linkedin Username" 
                           value="" 
                           onChange={() => {}}
                    />

                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
        </div>
    );
}