import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LogoFooter from '../../assets/logo-footer.png'; // Caminho correto da imagem da logo

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo e descrição */}
        <div className="footer-logo">
          <img src={LogoFooter} alt="Digital Store Logo" className="footer-logo-image" />
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore et dolore, dolore at.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Links de Informação e Categorias */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Informação</h4>
            <a href="/about">Sobre Drip Store</a>
            <a href="/security">Segurança</a>
            <a href="/wishlist">Wishlist</a>
            <a href="/blog">Blog</a>
            <a href="/jobs">Trabalhe conosco</a>
            <a href="/orders">Meus Pedidos</a>
          </div>
          <div className="footer-column">
            <h4>Categorias</h4>
            <a href="/shirts">Camisetas</a>
            <a href="/pants">Calças</a>
            <a href="/caps">Bonés</a>
            <a href="/headphones">Headphones</a>
            <a href="/shoes">Tênis</a>
          </div>
          <div className="footer-column">
            <h4>Contato</h4>
            <p>Av. Santos Dumont, 1510 - 1 andar</p>
            <p>Aldeota, Fortaleza - CE, 60150-161</p>
            <p>(85) 3051-3411</p>
          </div>
        </div>
      </div>

      {/* Linha de separação */}
      <hr />

      {/* Texto do rodapé */}
      <p className="footer-copyright">
        © 2024 Digital Store
      </p>
    </footer>
  );
}

export default Footer;
