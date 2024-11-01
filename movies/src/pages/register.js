import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        const user = { username, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registration successful! You can now log in.');
        navigate('/'); // Redirect to login page after registration
    };

    return (
        <div className="register-container">
            <div className="container">
                <h2>Register</h2>
                <div className="input-field">
                    <input 
                        type="text" 
                        placeholder=" " 
                        required 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <label>Username</label>
                </div>
                <div className="input-field">
                    <input 
                        type="password" 
                        placeholder=" " 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <label>Password</label>
                </div>
                <button className="button" onClick={handleRegister}>Register</button>
                <Link to="/" style={{ display: 'block', marginTop: '15px', color: '#333' }}>
                    Already have an account? Login
                </Link>
            </div>
        </div>
    );
}

export default Register;
