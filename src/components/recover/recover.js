import React from 'react';
import { Link } from 'react-router-dom';
import './recover.css';
import logoHeader from "../../assets/logo-header.png";
import password from "../../assets/password.gif";

function Recover() {
  return (
    <div className="recover-page">
      {}
      <header className="recover-header">
        <img src={logoHeader} alt="Logo Digital Store" className="recover-logo" />
      </header>

      {}
      <div className="recover-container">
        {}
        <div className="recover-left">
          <img src={password} alt="Recuperação de Senha" className="recover-image" />
        </div>

        {}
        <div className="recover-right">
          <div className="recover-card">
            <div className="recover-top">
              <h1>Recuperar Senha</h1>
              <p>Informe seu e-mail para que possamos lhe <br /> enviar um link de recuperação.</p>
            </div>
            <div className="recover-middle">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="nome@email.com"
              />
            </div>
            <div className="recover-bottom">
              <button className="recover-button">Enviar link de recuperação</button>
              <Link to="/login" className="recover-link">Voltar para Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recover;