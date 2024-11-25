import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../logo/logo';
import './header.css';

function Header() {
  const location = useLocation(); // Pega a localização atual da rota

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-left">
          <Logo />
        </div>
        <div className="header-container">
          <div className="header-center">
            <input type="text" placeholder="Pesquisar produto..." />
            <button type="submit">🔍</button>
          </div>
        </div>
        <div className="header-right">
          <div className="redirect-area">
            <NavLink to="/register" className="register">Cadastre-se</NavLink>
            <NavLink to="/login" className="login">Entrar</NavLink>
            <span className="cart-icon">🛒</span>
          </div>
        </div>
      </div>
      <nav className="header-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={() =>
            location.pathname.startsWith('/products') || location.pathname.startsWith('/product')
              ? 'active-link'
              : ''
          }
        >
          Produtos
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Categorias
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Meus Pedidos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
