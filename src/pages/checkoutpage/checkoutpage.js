import React from "react";
import "./checkoutpage.css";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/finalizepurchase");
  };

  return (
    <div className="checkout-page">
      {}
      <div className="checkout-content">
        <div className="checkout-card">
          <div className="cart-header">
            <span className="header-item1">Meu carrinho</span>
            <span className="header-item2">Quantidade</span>
            <span className="header-item3">Unitário</span>
            <span className="header-item4">Total</span>
          </div>
          <hr className="divider" />
          <div className="cart-item">
            <img
              src={require("../../assets/tenis-nike-red.png")}
              alt="Tênis"
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <h4 className="item-title">Tênis Nike Revolution 6 Next Nature Masculino</h4>
              <p className="item-details">Cor: Vermelho / Branco</p>
              <p className="item-details">Tamanho: 40</p>
            </div>
            <div className="cart-item-quantity">
              <button className="quantity-button">-</button>
              <span className="quantity-value">1</span>
              <button className="quantity-button">+</button>
            </div>
            <div className="cart-item-unit">
              <span className="card-valor">R$ 219,00</span>
              <span>R$ 219,00</span>
            </div>
            <div className="cart-item-total">
              <span className="card-valor">R$ 219,00</span>
              <span>R$ 219,00</span>
            </div>
          </div>
          <button className="remove-item">Remover Item</button>
          <hr className="divider" />
          <div className="cart-actions">
            <div className="action-group">
              <input type="text" className="action-input" placeholder="Insira seu código" />
              <button className="action-button">OK</button>
            </div>
            <div className="action-group">
              <input type="text" className="action-input" placeholder="Insira seu CEP" />
              <button className="action-button">OK</button>
            </div>
          </div>
        </div>

        <div className="summary-card">
          <h3 className="summary-title">Resumo</h3>
          <div className="summary-item">
            <span className="summary-label">Subtotal:</span>
            <span className="summary-value">R$ 219,00</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Frete:</span>
            <span className="summary-value">R$ 0,00</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Desconto:</span>
            <span className="summary-value">R$ 30,00</span>
          </div>
          <div className="summary-total">
            <span className="summary-label">Total:</span>
            <span className="summary-value">R$ 219,00</span>
          </div>
          <p className="summary-installments">ou 10x de R$ 21,00 sem juros</p>
          <button className="continue-button" onClick={handleContinue}>
            Continuar
          </button>
        </div>
      </div>

      {}
      <div className="related-products">
        <h2>Produtos Relacionados</h2>
        <div className="related-products-grid">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="related-product-card">
              <div className="product-card">
                <img
                  src={require("../../assets/tenis-swiss.png")}
                  alt="Produto Relacionado"
                  className="product-card-image"
                />
              </div>
              <p>Tênis K-Swiss V8 - Masculino</p>
              <p>
                <span className="old-price">R$ 200,00</span> <span>R$ 100,00</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
