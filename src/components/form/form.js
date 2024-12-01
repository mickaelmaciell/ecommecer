import React from "react"; 
import { useNavigate } from "react-router-dom"; // Hook para redirecionamento
import "./form.css"; // Importação do CSS correspondente
import logoHeader from "../../assets/logo-header.png"; // Logo do cabeçalho

function Form() {
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita recarregar a página
    // Adicione lógica de validação ou envio aqui
    navigate("/confirmation"); // Redireciona para a página de confirmação ou outra rota
  };

  return (
    <div className="form-page">
      {/* Cabeçalho personalizado */}
      <header className="form-header">
        <img src={logoHeader} alt="Logo Digital Store" className="form-logo" />
      </header>

      <div className="form-container">
        <h1>Criar Conta</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Informações Pessoais</legend>
            <label htmlFor="fullName">Nome Completo *</label>
            <input
              type="text"
              id="fullName"
              placeholder="Insira seu nome"
              required
            />

            <label htmlFor="cpf">CPF *</label>
            <input
              type="text"
              id="cpf"
              placeholder="Insira seu CPF"
              required
            />

            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              placeholder="Insira seu email"
              required
            />

            <label htmlFor="password">Senha *</label>
            <input
              type="password"
              id="password"
              placeholder="Insira sua senha"
              required
            />
          </fieldset>

          <fieldset>
            <legend>Informações de Entrega</legend>
            <label htmlFor="address">Endereço *</label>
            <input
              type="text"
              id="address"
              placeholder="Insira seu endereço"
              required
            />

            <label htmlFor="neighborhood">Bairro *</label>
            <input
              type="text"
              id="neighborhood"
              placeholder="Insira seu bairro"
              required
            />

            <label htmlFor="city">Cidade *</label>
            <input
              type="text"
              id="city"
              placeholder="Insira sua cidade"
              required
            />

            <label htmlFor="zipCode">CEP *</label>
            <input
              type="text"
              id="zipCode"
              placeholder="Insira seu CEP"
              required
            />

            <label htmlFor="complement">Complemento</label>
            <input
              type="text"
              id="complement"
              placeholder="Insira complemento"
            />
          </fieldset>

          <div className="form-newsletter">
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter">
              Quero receber por email ofertas e novidades da loja Digital Store.
            </label>
          </div>

          <button type="submit" className="form-btn-register">
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
