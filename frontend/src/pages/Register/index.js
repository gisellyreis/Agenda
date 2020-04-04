import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>SingUp</h1>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#1316EB" />
                         Voltar para login                    
                    </Link>
                </section>

                <form onSubmit={() => {}} >
                    <input placeholder="Nome" 
                           value="" 
                           onChange={() => {}}
                    />
                    <input placeholder="Email" 
                           value="" 
                           onChange={() => {}}
                    />
                    <input placeholder="Password" 
                           type="password"
                           value="" 
                           onChange={() => {}}
                    />
                    <input placeholder="Telefone" 
                           value="" 
                           onChange={() => {}}
                    />

                    <button className="button" type="submit">SingUp</button>
                </form>
            </div>
        </div>
    );
}