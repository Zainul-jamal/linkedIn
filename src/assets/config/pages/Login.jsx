// src/pages/Login.js
import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Authentication logic here
    };

    return (
        <div className="login">
            <h2>Sign In</h2>
            <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="Email" 
            />
            <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                placeholder="Password" 
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
