import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginBox">
        <div className="loginHeader">
          <div className="logoWrap">
            <span className="material-symbols-outlined logoIcon">support_agent</span>
          </div>
          <h2>Suporte Técnico</h2>
          <p>Faça login para acessar o painel</p>
        </div>

        <form onSubmit={handleLogin} className="loginForm">
          {error && <div className="errorMessage">{error}</div>}
          
          <div className="inputGroup">
            <label>E-mail</label>
            <div className="inputWrapper">
              <span className="material-symbols-outlined inputIcon">mail</span>
              <input 
                type="email" 
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="inputGroup">
            <label>Senha</label>
            <div className="inputWrapper">
              <span className="material-symbols-outlined inputIcon">lock</span>
              <input 
                type="password" 
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="loginBtn" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar no Sistema'}
          </button>
        </form>
        
        <div className="loginFooter">
          <p>Uso exclusivo de técnicos e administradores.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
