import React from "react";
import "./ordersuccess.css";
import { useNavigate } from "react-router-dom";
import confettiImage from "../../assets/confete.png";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="order-success-page">
      <div className="success-container">
        <img src={confettiImage} alt="Confete" className="confetti-image" />
        <h1 className="success-title">Compra Realizada com sucesso!</h1>
        <div className="success-details">
          <h2>Informações Pessoais</h2>
          <div className="details-block">
            <p><strong>Nome:</strong> Francisco Antonio Pereira</p>
            <p><strong>CPF:</strong> 123.485.910-35</p>
            <p><strong>Email:</strong> francisco@gmail.com</p>
            <p><strong>Celular:</strong> (85) 5555-5555</p>
          </div>

          <h2>Informações de Entrega</h2>
          <div className="details-block">
            <p><strong>Endereço:</strong> Rua João Pessoa, 333</p>
            <p><strong>Bairro:</strong> Centro</p>
            <p><strong>Cidade:</strong> Fortaleza, Ceará</p>
            <p><strong>CEP:</strong> 433-8800</p>
          </div>

          <h2>Informações de Pagamento</h2>
          <div className="details-block">
            <p><strong>Titular do Cartão:</strong> FRANCISCO A P</p>
            <p><strong>Final:</strong> **********2020</p>
          </div>

          <h2>Resumo da compra</h2>
          <div className="details-block">
            <p><strong>Produto:</strong> Tênis Nike Revolution 6 Next Nature Masculino</p>
          </div>

          <div className="total-section">
            <h3>Total</h3>
            <p><strong>R$ 219,00</strong></p>
            <p>ou 10x de R$ 21,00 sem juros</p>
          </div>
        </div>

        <div className="actions">
          <button
            className="print-receipt"
            onClick={() => window.print()}
          >
            Imprimir Recibo
          </button>
          <button
            className="return-home"
            onClick={() => navigate("/")}
          >
            Voltar para Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
