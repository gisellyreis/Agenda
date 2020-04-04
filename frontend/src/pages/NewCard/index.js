import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function NewCard() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Criar novo contato</h1>

                    <Link className="back-link" to="/">
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
    );
}