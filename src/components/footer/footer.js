import React from 'react';
import Logo from '../logo/logo';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Logo type="footer" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="footer-links">
        <div>
          <h4>Informação</h4>
          <a href="/about">Sobre Drip Store</a>
          <a href="/blog">Blog</a>
        </div>
        <div>
          <h4>Categorias</h4>
          <a href="/shirts">Camisetas</a>
          <a href="/pants">Calças</a>
        </div>
        <div>
          <h4>Contato</h4>
          <p>Av. Santos Dumont, 1510 - Fortaleza</p>
          <p>(85) 3051-3411</p>
        </div>
      </div>
      <hr />
      <p>© 2024 Digital Store</p>
    </footer>
  );
}

export default Footer;
