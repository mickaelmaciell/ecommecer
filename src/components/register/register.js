import React from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom"; // Importa o Link e useNavigate para navegação
import tenisAmareloEsquerdo from "../../assets/tenis-amarelo-esquerdo.png";
import tenisAmareloDireito from "../../assets/tenis-amarelo-direito.png";
import gmailLogo from "../../assets/gmail.png";
import facebookLogo from "../../assets/facebook.png";
import logoHeader from "../../assets/logo-header.png"; // Importe a imagem do logo

function Register() {
  const navigate = useNavigate(); // Hook para navegação programática

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    navigate("/form"); // Redireciona para a página de formulário
  };

  return (
    <div className="register-page">
      {/* Header personalizado para a página de registro */}
      <header className="register-header">
        <img src={logoHeader} alt="Logo Digital Store" className="register-logo" />
      </header>
      <div className="register-content">
        <div className="register-container">
          <h1>Crie sua conta</h1>
          <p>
            Já possui uma conta? <Link to="/login">Entre aqui.</Link>
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              placeholder="Insira seu email"
              required
            />
            <button type="submit" className="btn-primary">
              Criar conta
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
        <div className="register-image">
          <img src={tenisAmareloEsquerdo} alt="Tênis Esquerdo" className="tenis-esquerdo" />
          <img src={tenisAmareloDireito} alt="Tênis Direito" className="tenis-direito" />
        </div>
      </div>
    </div>
  );
}

export default Register;
