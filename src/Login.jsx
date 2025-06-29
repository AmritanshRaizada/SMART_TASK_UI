import { useState } from 'react';
import axios from 'axios';

function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/token/`, { username, password });
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      setToken(res.data.access);
    } catch {
      alert("Login failed");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;