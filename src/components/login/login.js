import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import tenisAmareloEsquerdo from "../../assets/tenis-amarelo-esquerdo.png";
import tenisAmareloDireito from "../../assets/tenis-amarelo-direito.png";
import gmailLogo from "../../assets/gmail.png";
import facebookLogo from "../../assets/facebook.png";
import logoHeader from "../../assets/logo-header.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const mockUser = {
      fullName: "João Silva",
      email: email,
      cellphone: "(85) 99999-9999",
      address: "Rua Exemplo, 123",
      neighborhood: "Bairro Centro",
      city: "Fortaleza",
      zipCode: "60000-000",
    };

    localStorage.setItem("userProfile", JSON.stringify(mockUser));

    navigate("/profile");
  };

  return (
    <div className="login-page">
      {}
      <header className="login-header">
        <img src={logoHeader} alt="Logo Digital Store" className="login-logo" />
      </header>
      <div className="login-content">
        <div className="login-container">
          <h1>Acesse sua conta</h1>
          <p>
            Novo cliente? Então registre-se <a href="/register">aqui.</a>
          </p>
          <form onSubmit={handleLogin}>
            <label htmlFor="login">Login *</label>
            <input
              type="email"
              id="login"
              placeholder="Insira seu login ou email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Senha *</label>
            <input
              type="password"
              id="password"
              placeholder="Insira sua senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="/recover" className="forgot-password">
              Esqueci minha senha
            </a>
            <button type="submit" className="btn-primary">
              Acessar Conta
            </button>
          </form>
          <div className="social-login">
            <p>Ou faça login com</p>
            <a href="/login-google" className="google-login">
              <img src={gmailLogo} alt="Login com Gmail" />
            </a>
            <a href="/login-facebook" className="facebook-login">
              <img src={facebookLogo} alt="Login com Facebook" />
            </a>
          </div>
        </div>
        <div className="login-image">
          <img
            src={tenisAmareloEsquerdo}
            alt="Tênis Esquerdo"
            className="tenis-esquerdo"
          />
          <img
            src={tenisAmareloDireito}
            alt="Tênis Direito"
            className="tenis-direito"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
