import React from "react";
import { Link } from "react-router-dom";
import "./trendingproducts.css";
import tenisSwiss from "../../assets/tenis-swiss.png";
import nikeAmarelo from "../../assets/nike-amarelo.png";
import ellipse from "../../assets/Ellipse.png";

function TrendingProducts() {
  const products = [
    {
      id: 1,
      image: tenisSwiss,
      name: "K-Swiss V8 - Masculino",
      oldPrice: "$200",
      newPrice: "$100",
      discount: "30% OFF",
    },
    {
      id: 1,
      image: tenisSwiss,
      name: "K-Swiss V8 - Masculino",
      oldPrice: "$200",
      newPrice: "$100",
      discount: "30% OFF",
    },
    {
      id: 1,
      image: tenisSwiss,
      name: "K-Swiss V8 - Masculino",
      oldPrice: "$200",
      newPrice: "$100",
      discount: "30% OFF",
    },
    {
      id: 1,
      image: tenisSwiss,
      name: "K-Swiss V8 - Masculino",
      oldPrice: "$200",
      newPrice: "$100",
      discount: "30% OFF",
    },
    {
      id: 1,
      image: tenisSwiss,
      name: "K-Swiss V8 - Masculino",
      oldPrice: "$200",
      newPrice: "$100",
      discount: "30% OFF",
    },
    {
      id: 1,
      image: tenisSwiss,
      name: "K-Swiss V8 - Masculino",
      oldPrice: "$200",
      newPrice: "$100",
      discount: "30% OFF",
    },
    {
      id: 1,
      image: tenisSwiss,
      name: "K-Swiss V8 - Masculino",
      oldPrice: "$200",
      newPrice: "$100",
      discount: "30% OFF",
    },
    {
      id: 1,
      image: tenisSwiss,
      name: "K-Swiss V8 - Masculino",
      oldPrice: "$200",
      newPrice: "$100",
      discount: "30% OFF",
    },
  ];

  return (
    <div className="trending-products-container">
      <h2 className="trending-products-title">Produtos em alta</h2>
      <div className="trending-products-grid">
        {products.map((product, index) => (
          <Link
            key={index}
            to={`/product/${product.id}`}
            className="trending-product-card"
          >
            <div className="trending-image-container">
              <span className="trending-discount">{product.discount}</span>
              <img src={product.image} alt={product.name} />
            </div>
            <div className="trending-product-info">
              <p className="trending-product-category">Tênis</p>
              <p className="trending-product-name">{product.name}</p>
              <p className="trending-old-price">{product.oldPrice}</p>
              <p className="trending-new-price">{product.newPrice}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Nova seção adicionada */}
      <div className="special-offer-section">
        <div className="offer-image">
          <img src={ellipse} alt="Ellipse Background" className="ellipse-bg" />
          <img src={nikeAmarelo} alt="Nike Amarelo" className="nike-shoes" />
        </div>
        <div className="offer-content">
          <p className="offer-tag">Oferta especial</p>
          <h2 className="offer-title">Air Jordan edição de colecionador</h2>
          <p className="offer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <button className="offer-button">Ver Oferta</button>
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
