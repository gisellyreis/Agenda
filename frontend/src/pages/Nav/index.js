import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Nav() {
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
       </div> 
    );
}