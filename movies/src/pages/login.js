import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            if (user.username === username && user.password === password) {
                alert('Login successful!');
                navigate('/movies/homepage'); 
            } else {
                alert('Invalid credentials');
            }
        }
    };

    return (
        <div className="login-container">
            <div className="container">
                <h2>Login</h2>
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
                <button className="button" onClick={handleLogin}>Login</button>
                <Link to="/register" style={{ display: 'block', marginTop: '15px', color: '#333' }}>
                    Don't have an account? Register
                </Link>
            </div>
        </div>
    );
}

export default Login;
