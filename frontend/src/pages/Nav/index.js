import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import { FiPower } from 'react-icons/fi';
import { useState } from 'react';

export default function Nav() {

    const history = useHistory();
    const [contact_name, setContactName] = useState('');

    async function handleSearch() {
       
        localStorage.setItem('contactName', contact_name);
        history.push('/search');

    };
    

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
       <div className="nav-container">
           <ul>
                <Link className="a" to="/profile" >
                    <li>Home</li>
                </Link>
                <Link className="a" to="/contacts/new" >
                    <li>New Contat</li>
                </Link>
                <Link className="a" to="/update" >
                    <li>Update Profile</li>
                </Link>
           </ul>
           <div className="search">
                <form onSubmit={handleSearch}  >
                    <input placeholder="Search Contact" 
                           value={contact_name}
                           onChange={e => setContactName(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>

           <button onClick={handleLogout} type="button">
               <FiPower size={18} color="#e02041" />
           </button>
       </div> 
    );
}