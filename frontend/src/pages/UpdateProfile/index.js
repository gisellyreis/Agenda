import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import Nav from '../Nav';

export default function UpdateProfile() {
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