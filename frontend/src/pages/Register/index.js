import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import { useState } from 'react';

export default function Register() {
    
    const [user_name, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const history = useHistory(); 

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            user_name,
            email,
            password,
            phone,
        };

        try {
            await api.post('singUp', data);

            history.push('/');
            
        } catch (error) {
            
        }

    };


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

                <form onSubmit={handleRegister} className="form">
                    <input placeholder="Nome" 
                           value={user_name} 
                           onChange={e => setUserName(e.target.value)}
                    />
                    <input placeholder="Email" 
                           value={email} 
                           onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="Password" 
                           value={password} 
                           onChange={e => setPassword(e.target.value)}
                    />
                    <input placeholder="Telefone" 
                           value={phone} 
                           onChange={e => setPhone(e.target.value)}
                    />

                    <button className="button" type="submit">SingUp</button>
                </form>
            </div>
        </div>
    );
}