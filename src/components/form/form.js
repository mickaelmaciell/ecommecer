import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import logoHeader from "../../assets/logo-header.png";

function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    cpf: "",
    email: "",
    cellphone: "",
    address: "",
    neighborhood: "",
    city: "",
    zipCode: "",
    complement: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userProfile", JSON.stringify(formData));
    navigate("/profile/details");
  };

  return (
    <div className="form-page">
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
              value={formData.fullName}
              onChange={handleChange}
            />
            <label htmlFor="cpf">CPF *</label>
            <input
              type="text"
              id="cpf"
              placeholder="Insira seu CPF"
              required
              value={formData.cpf}
              onChange={handleChange}
            />
            <label htmlFor="email">E-mail *</label>
            <input
              type="email"
              id="email"
              placeholder="Insira seu email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="cellphone">Celular *</label>
            <input
              type="tel"
              id="cellphone"
              placeholder="Insira seu celular"
              required
              value={formData.cellphone}
              onChange={handleChange}
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
              value={formData.address}
              onChange={handleChange}
            />
            <label htmlFor="neighborhood">Bairro *</label>
            <input
              type="text"
              id="neighborhood"
              placeholder="Insira seu bairro"
              required
              value={formData.neighborhood}
              onChange={handleChange}
            />
            <label htmlFor="city">Cidade *</label>
            <input
              type="text"
              id="city"
              placeholder="Insira sua cidade"
              required
              value={formData.city}
              onChange={handleChange}
            />
            <label htmlFor="zipCode">CEP *</label>
            <input
              type="text"
              id="zipCode"
              placeholder="Insira seu CEP"
              required
              value={formData.zipCode}
              onChange={handleChange}
            />
            <label htmlFor="complement">Complemento</label>
            <input
              type="text"
              id="complement"
              placeholder="Insira complemento"
              value={formData.complement}
              onChange={handleChange}
            />
          </fieldset>
          <button type="submit" className="form-btn-register">
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
