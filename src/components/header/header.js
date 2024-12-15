import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../logo/logo";
import "./header.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); //! oioioi


  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userProfile"));
    if (storedData && storedData.fullName) {
      setUserName(storedData.fullName.split(" ")[0]);
    }

    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartCount(storedCart.length || 2);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    if (searchQuery.trim()) {
      navigate(`/products?q=${searchQuery.trim()}`); // Redireciona com o query string
    }
  }; //!oioioioi

  const handleMeusPedidosClick = (e) => {
    if (!userName) {
      e.preventDefault();
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    setUserName("");
    navigate("/");
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-left">
          <Logo />
        </div>
        <div className="header-container">
          <div className="header-center">
            <input type="text" placeholder="Pesquisar produto..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" onClick={handleSearch}>🔍</button>
          </div>
        </div>
        <div className="header-right">
          <div className="redirect-area">
            {userName ? (
              <>
                <span className="user-greeting">Olá, {userName}</span>
                <button className="logout-button" onClick={handleLogout}>
                  Sair
                </button>
              </>
            ) : (
              <>
                <NavLink to="/register" className="register">
                  Cadastre-se
                </NavLink>
                <NavLink to="/login" className="login">
                  Entrar
                </NavLink>
              </>
            )}
            {userName && (
              <div className="cart-container">
                <span className="cart-icon" onClick={toggleCart}>
                  🛒
                </span>
                <span className="cart-count">{cartCount}</span>
                {isCartOpen && (
                  <div className="cart-popup">
                    <h3>Meu Carrinho</h3>
                    <div className="cart-item">
                      <img
                        src={require("../../assets/tenis-nike-red.png")}
                        alt="Tênis"
                      />
                      <div>
                        <p>
                          <strong>Tênis Nike Revolution 6 Next Nature Masculino</strong>
                        </p>
                        <p>R$ 219,00</p>
                      </div>
                    </div>
                    <div className="cart-item">
                      <img
                        src={require("../../assets/tenis-nike-red.png")}
                        alt="Tênis"
                      />
                      <div>
                        <p>
                          <strong>Tênis Nike Revolution 6 Next Nature Masculino</strong>
                        </p>
                        <p>R$ 219,00</p>
                      </div>
                    </div>
                    <div className="cart-total">
                      <p>Valor total:</p>
                      <p className="total-price">R$ 219,00</p>
                    </div>
                    <div className="cart-actions">
                      <button className="empty-cart">Esvaziar</button>
                      <button className="view-cart">Ver Carrinho</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <nav className="header-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={() =>
            location.pathname.startsWith("/products") ||
            location.pathname.startsWith("/product")
              ? "active-link"
              : ""
          }
        >
          Produtos
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Categorias
        </NavLink>
        <NavLink
          to="/profile/orders"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={handleMeusPedidosClick}
        >
          Meus Pedidos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
