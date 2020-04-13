import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Login() {

    const [user_name, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('login', { user_name, password });
            
            localStorage.setItem('userId', response.data.id)
            localStorage.setItem('userName', response.data.user_name)
            localStorage.setItem('userEmail', response.data.email)
            localStorage.setItem('userPhone', response.data.phone)
            localStorage.setItem('userGit', response.data.github_username)
            localStorage.setItem('userLinkedin', response.data.linkedin_username)

            history.push('/profile');
        } catch (error) {
            alert('Falha ao logar.' + error)
        }
    };

    return (
        <div className="register-container">
            <div className="content">
                <section> 
                    <h1>Login</h1>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#1316EB" />
                         Criar conta                    
                    </Link>
                </section>

                <form onSubmit={handleLogin} className="form">
                    <input placeholder="Nome" 
                           value={user_name}
                           onChange={e => setUserName(e.target.value)}
                    />
                    <input placeholder="Password" 
                           value={password} 
                           onChange={e => setPassword(e.target.value)}
                    />

                    <button className="button" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}