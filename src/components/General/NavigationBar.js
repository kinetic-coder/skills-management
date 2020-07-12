import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => (
    <div>
        <div className="icon">   
            
        </div>
        <header className="header">
            <Link to="/">Skills Management</Link>

            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>

        </header>    
    </div>
    
)

export default NavigationBar;