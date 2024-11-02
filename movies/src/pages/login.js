import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const requestTokenResponse = await axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_TMDB_KEY}`);
            const requestToken = requestTokenResponse.data.request_token;

            const loginResponse = await axios.post(`https://api.themoviedb.org/3/authentication/token/validate_with_username?api_key=${process.env.REACT_APP_TMDB_KEY}`, {
                username,
                password,
                request_token: requestToken,
            });

            if (loginResponse.data.success) {
                // 登录成功，可以根据需要保存用户信息
                navigate('/'); // 跳转到主页
            } else {
                setError('登录失败，请检查用户名和密码');
            }
        } catch (error) {
            console.error(error);
            setError('发生错误，请稍后再试');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
