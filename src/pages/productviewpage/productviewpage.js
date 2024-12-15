import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./productviewpage.css";

function ProductViewPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: "1",
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      image: "/assets/tenis-nike-red.png", 
      price: "R$ 219,00",
      oldPrice: "R$ 319,00",
      description:
        "Tênis confortável para corridas e uso diário. Feito com materiais reciclados para reduzir o impacto ambiental.",
      sizes: ["39", "40", "41", "42", "43"],
      colors: ["#FF0000", "#0000FF", "#00FF00"],
      rating: 4.7,
      stock: 100,
    },
  ];

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <p>Produto não encontrado!</p>;
  }

  return (
    <div className="product-view-page">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <a href="/products">Produtos</a> /{" "}
        <a href="/products/shoes">Tênis</a> / <a href="/products/shoes/nike">Nike</a> /{" "}
        {product.name}
      </nav>

      <div className="product-details">
        <div className="product-frame">
          <button className="arrow left-arrow">{"<"}</button>
          <img
            src={require("../../assets/tenis-nike-red.png")}
            alt={product.name}
            className="product-thumbnail"
          />
          <button className="arrow right-arrow">{">"}</button>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="rating">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`star ${index < Math.round(product.rating) ? "filled" : "unfilled"}`}
              >
                ★
              </span>
            ))}
            <span className="rating-square">{product.rating}</span>
            <span className="review-count">(90 avaliações)</span>
          </p>
          <p className="price">
            <span className="old-price">{product.oldPrice}</span> {product.price}
          </p>
          <p>{product.description}</p>
          <div className="sizes">
            <h3>Tamanho:</h3>
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`size-button ${size === "40" ? "selected" : ""}`}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="colors">
            <h3>Cor:</h3>
            {product.colors.map((color) => (
              <button
                key={color}
                className="color-button"
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
          <button className="buy-button" onClick={() => navigate("/checkoutpage")}>
            Comprar
          </button>
        </div>
      </div>

      {}
      <div className="product-suggestions">
        <div className="suggestions-grid">
          {["#f8d7da", "#d4edda", "#d1ecf1", "#fff3cd", "#f5c6cb"].map((color, index) => (
            <div
              key={index}
              className="suggestion-card"
              style={{ backgroundColor: color }}
            >
              <img
                src={require("../../assets/tenis-nike-red.png")}
                alt={`Sugestão ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {}
      <div className="related-products">
        <h2>Produtos Relacionados</h2>
        <div className="related-products-grid">
          {[1, 2, 3, 4, 5].map((_, index) => (
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
}

export default ProductViewPage;
