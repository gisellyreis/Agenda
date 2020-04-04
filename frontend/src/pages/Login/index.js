import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

export default function Login() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Login</h1>

                    <Link className="back-link" to="/">
                        <FiLogIn size={16} color="#1316EB" />
                         Criar conta                    
                    </Link>
                </section>

                <form onSubmit={() => {}} >
                    <input placeholder="Nome" 
                           value="" 
                           onChange={() => {}}
                    />
                    <input placeholder="Password" 
                           type="password"
                           value="" 
                           onChange={() => {}}
                    />

                    <button className="button" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}