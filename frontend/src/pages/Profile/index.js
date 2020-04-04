import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit3 } from 'react-icons/fi';

import './styles.css';
import Nav from '../Nav';

export default function Card() {
    return (

        <div>
            <Nav />
            <div className="profile-container">
            <ul>
            <li key="">
                <div className="user-info">
                    <img src="https://avatars1.githubusercontent.com/u/47332912?v=4" alt=""/>
                    <strong>Nome</strong>
                </div>
                <div className="group">
                <div className="input-group">
                    <strong>Telefone</strong>
                    <p>contact-telefone</p>

                    <strong>E-mail</strong>
                    <p>contact-email</p>
                </div>
                
                <div className="input-group" >
                    <strong>GitHub</strong>
                    <p>contact-github</p>

                    <strong>Linkedin</strong>
                    <p>contact-linkedin</p>
                </div>
                </div>

                <button onClick="" className="delete">
                    <FiTrash2 size={20} color="a8a8b3" />
                </button>
                <button onClick="" className="update">
                    <FiEdit3 size={20} color="a8a8b3" />
                </button>
            </li>

            <li key="">
                <div className="user-info">
                    <img src="https://avatars1.githubusercontent.com/u/47332912?v=4" alt=""/>
                    <strong>Nome</strong>
                </div>
                <div className="group">
                <div className="input-group">
                    <strong>Telefone</strong>
                    <p>contact-telefone</p>

                    <strong>E-mail</strong>
                    <p>contact-email</p>
                </div>
                
                <div className="input-group">
                    <strong>GitHub</strong>
                    <p>contact-github</p>

                    <strong>Linkedin</strong>
                    <p>contact-linkedin</p>
                </div>
                </div>

                <button onClick="" className="delete">
                    <FiTrash2 size={20} color="a8a8b3" />
                </button>
                <button onClick="" className="update">
                    <FiEdit3 size={20} color="a8a8b3" />
                </button>
            </li>
        </ul>
       
        </div>
        </div>
    );
}