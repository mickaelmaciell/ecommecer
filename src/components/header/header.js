import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Logo />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Produtos</Link>
          <Link to="/categories">Categorias</Link>
          <Link to="/orders">Meus Pedidos</Link>
        </nav>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Pesquisar produto..." />
        <button type="submit">🔍</button>
        <div className="redirect-area">
          <Link to="/register" className="register">Cadastre-se</Link>
          <Link to="/login" className="login">Entrar</Link>
          <span className="cart-icon">🛒</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
