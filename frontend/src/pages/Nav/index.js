import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import { FiPower } from 'react-icons/fi';

export default function Nav() {

    const history = useHistory();

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

           <button onClick={handleLogout} type="button">
               <FiPower size={18} color="#e02041" />
           </button>
       </div> 
    );
}