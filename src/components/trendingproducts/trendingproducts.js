import React from "react";
import { Link } from "react-router-dom";
import "./trendingproducts.css";
import tenisSwiss from "../../assets/tenis-swiss.png";

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
    // Novos produtos adicionados
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
    <div className="trending-products">
      <h2>Produtos em alta</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <Link
            key={index} // Use o index para garantir uma chave única
            to={`/product/${product.id}`} // Redireciona para a página do produto
            className="product-card"
          >
            <div className="image-container">
              <span className="discount">{product.discount}</span>
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <p className="category">Tênis</p>
              <p className="product-name">{product.name}</p>
              <p className="old-price">{product.oldPrice}</p>
              <p className="new-price">{product.newPrice}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TrendingProducts;
