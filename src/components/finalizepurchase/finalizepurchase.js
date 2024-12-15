import React from "react";
import "./finalizepurchase.css";
import { useNavigate } from "react-router-dom"; 

const FinalizePurchase = () => {
  const navigate = useNavigate(); 

  return (
    <div className="finalize-purchase-page">
      <h1 className="finalize-title">Finalizar Compra</h1>

      <div className="finalize-content">
        {/* Formulário */}
        <div className="form-section">
          <div className="section-block">
            <h2 className="section-title">Informações Pessoais</h2>
            <form>
              <input type="text" placeholder="Insira seu nome" required />
              <input type="text" placeholder="Insira seu CPF" required />
              <input type="email" placeholder="Insira seu email" required />
              <input type="text" placeholder="Insira seu celular" required />
            </form>
          </div>

          <div className="section-block">
            <h2 className="section-title">Informações de Entrega</h2>
            <form>
              <input type="text" placeholder="Insira seu endereço" required />
              <input type="text" placeholder="Insira seu bairro" required />
              <input type="text" placeholder="Insira sua cidade" required />
              <input type="text" placeholder="Insira seu CEP" required />
              <input type="text" placeholder="Insira complemento" />
            </form>
          </div>

          <div className="section-block">
            <h2 className="section-title">Informações de Pagamento</h2>
            <form>
              <div className="payment-methods">
                <label>
                  <input type="radio" name="payment" value="credit" defaultChecked />
                  Cartão de Crédito
                </label>
                <label>
                  <input type="radio" name="payment" value="boleto" />
                  Boleto Bancário
                </label>
              </div>
              <input type="text" placeholder="Insira o nome do cartão" required />
              <input type="text" placeholder="Insira número do cartão" required />
              <div className="inline-inputs">
                <input type="text" placeholder="Data de validade" required />
                <input type="text" placeholder="CVV" required />
              </div>
            </form>
          </div>
        </div>

        {/* Resumo */}
        <div className="summary-section">
          <div className="summary-card">
            <h3 className="summary-title">Resumo</h3>
            <div className="summary-item">
              <span className="summary-label">Tênis Nike Revolution 6 Next Nature Masculino</span>
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
            <button
              className="continue-button"
              onClick={() => navigate("/success")} 
            >
              Realizar Pagamento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalizePurchase;
