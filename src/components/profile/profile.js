import React, { useEffect, useState } from "react";
import "./profile.css";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("orders");
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userProfile"));
    if (storedData) {
      setUserProfile(storedData);
    }
  }, []);

  const orders = [
    {
      id: "223381032",
      product: "Tênis Nike Revolution 6 Next Nature Masculino",
      status: "Produto em trânsito",
      statusColor: "status-in-transit",
    },
    {
      id: "445918042",
      product: "Tênis Nike Revolution 6 Next Nature Masculino",
      status: "Finalizado",
      statusColor: "status-completed",
    },
    {
      id: "445918042",
      product: "Tênis Nike Revolution 6 Next Nature Masculino",
      status: "Cancelado",
      statusColor: "status-cancelled",
    },
  ];

  return (
    <div className="profile-page">
      {}
      <div className="profile-sidebar">
        <ul>
          <li
            className={activeSection === "orders" ? "active" : ""}
            onClick={() => setActiveSection("orders")}
          >
            Meus Pedidos
          </li>
          <li
            className={activeSection === "details" ? "active" : ""}
            onClick={() => setActiveSection("details")}
          >
            Minhas Informações
          </li>
          <li>Métodos de Pagamento</li>
        </ul>
      </div>

      {}
      <div className="profile-content">
        {activeSection === "orders" && (
          <div className="orders-content">
            <h2>Meus Pedidos</h2>
            <div className="orders-list">
              {orders.map((order, index) => (
                <div key={index} className="order-item">
                  <div className="order-product">
                    <img
                      src={require("../../assets/tenis-nike-red.png")}
                      alt={order.product}
                    />
                    <div className="order-details">
                      <p>
                        <strong>Pedido nº {order.id}</strong>
                      </p>
                      <p>{order.product}</p>
                    </div>
                  </div>
                  <div className={`order-status ${order.statusColor}`}>
                    {order.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "details" && (
          <div className="details-content">
            <h1>Minhas Informações</h1>
            {userProfile ? (
              <div>
                <p>
                  <strong>Nome:</strong> {userProfile.fullName}
                </p>
                <p>
                  <strong>CPF:</strong> {userProfile.cpf}
                </p>
                <p>
                  <strong>Email:</strong> {userProfile.email}
                </p>
                <p>
                  <strong>Celular:</strong> {userProfile.cellphone}
                </p>
                <p>
                  <strong>Endereço:</strong> {userProfile.address}
                </p>
                <p>
                  <strong>Bairro:</strong> {userProfile.neighborhood}
                </p>
                <p>
                  <strong>Cidade:</strong> {userProfile.city}
                </p>
                <p>
                  <strong>CEP:</strong> {userProfile.zipCode}
                </p>
                {userProfile.complement && (
                  <p>
                    <strong>Complemento:</strong> {userProfile.complement}
                  </p>
                )}
              </div>
            ) : (
              <p>Não há informações disponíveis.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
