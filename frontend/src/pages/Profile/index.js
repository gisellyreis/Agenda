import React from 'react';
import { FiTrash2, FiEdit3 } from 'react-icons/fi';

import api from '../../services/api';
 
import './styles.css';
import Nav from '../Nav';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Profile() {

    const [contacts, setContacts] = useState([]);
    const history = useHistory();

    

    const userId = localStorage.getItem('userId');
    // const userName = localStorage.getItem('userName');
 
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: userId,
            }
        }).then(res => {
            setContacts(res.data);
        })
    }, [userId]);

    async function handleDeleteContact(id) {
        try {
            await api.delete(`contacts/${id}`, {
                headers: {
                    Authorization: userId,
                }
            });

            setContacts(contacts.filter(contact => contact.id !== id));
        } catch (error) {
            alert('Erro ao deletar contato.')
        }
    }

    async function handleUpdate(id) {
        try {
           const data = await api.get(`contact/${id}`, {
                headers: {
                    Authorization: userId,
                }
            });
            const contact = data.data;
            localStorage.setItem('id', contact.id)
            localStorage.setItem('name', contact.name)
            localStorage.setItem('phone', contact.phone)
            localStorage.setItem('email', contact.email)
            localStorage.setItem('github_username', contact.github_username)
            localStorage.setItem('linkedin_username', contact.linkedin_username)

            history.push('/contact');
        } catch (error) {
            alert('Erro ao selecionar contato.')
        }
    }

    return (

        <div>
            <Nav />
            <div className="profile-container">
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                    <div className="user-info">
                        <img src={contact.avatar_url} alt={contact.name} />
                        <strong>{contact.name}</strong>
                    </div>
                    <div className="group">

                    <div className="input-group">
                        <strong>Telefone</strong>
                        <p>{contact.phone} </p>
    
                        <strong>E-mail</strong>
                        <p>{contact.email}</p> 
                    </div>
                    
                    <div className="input-group" >
                        <strong>GitHub</strong>
                            <p><a href={`https://github.com/${contact.github_username}`} >{contact.github_username} </a></p>
                        <strong>Linkedin</strong>
                        <p>{contact.linkedin_username}</p>
                    </div>
                    
                    </div>
    
                    <button onClick={() => handleDeleteContact(contact.id)} className="delete">
                        <FiTrash2 size={20} color="a8a8b3" />
                    </button>
            
                    <button onClick={() => handleUpdate(contact.id)}  className="update">
                        <FiEdit3 size={20} color="a8a8b3" />
                    </button>
                </li>
                ))}
             </ul>
       
            </div>
        </div>
    );
}