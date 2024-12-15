import React from "react";
import { Link } from "react-router-dom"; 
import "./productlistingpage.css";
import tenisSwiss from "../../assets/tenis-swiss.png";

function ProductListingPage() {
  const products = new Array(12).fill({
    id: 1,
    image: tenisSwiss,
    name: "K-Swiss V8 - Masculino",
    oldPrice: "$200",
    newPrice: "$100",
    discount: "30% OFF",
  });

  return (
    <div className="product-listing-page">
      <header className="page-header">
        <h1>Resultados para "Tênis" - 389 produtos</h1>
      </header>
      <div className="filter-and-content">
        <aside className="filters">
          <h3>Filtrar por</h3>
          <section>
            <h4>Marca</h4>
            <div>
              <input type="checkbox" id="adidas" />
              <label htmlFor="adidas">Adidas</label>
            </div>
            <div>
              <input type="checkbox" id="calen" />
              <label htmlFor="calen">Calen</label>
            </div>
            <div>
              <input type="checkbox" id="k-swiss" />
              <label htmlFor="k-swiss">K-Swiss</label>
            </div>
            <div>
              <input type="checkbox" id="nike" />
              <label htmlFor="nike">Nike</label>
            </div>
            <div>
              <input type="checkbox" id="puma" />
              <label htmlFor="puma">Puma</label>
            </div>
          </section>
          <section>
            <h4>Categoria</h4>
            <div>
              <input type="checkbox" id="sport" />
              <label htmlFor="sport">Esporte e lazer</label>
            </div>
            <div>
              <input type="checkbox" id="casual" />
              <label htmlFor="casual">Casual</label>
            </div>
          </section>
          <section>
            <h4>Gênero</h4>
            <div>
              <input type="checkbox" id="masc" />
              <label htmlFor="masc">Masculino</label>
            </div>
            <div>
              <input type="checkbox" id="fem" />
              <label htmlFor="fem">Feminino</label>
            </div>
          </section>
        </aside>
        <main className="product-content">
          <div className="sort-by">
            <label htmlFor="sort">Ordenar por:</label>
            <select id="sort">
              <option value="relevance">mais relevantes</option>
              <option value="low-price">menor preço</option>
              <option value="high-price">maior preço</option>
            </select>
          </div>
          <div className="products-grid">
            {products.map((product, index) => (
              <Link
                key={index}
                to={`/product/${product.id}`} 
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
        </main>
      </div>
    </div>
  );
}

export default ProductListingPage;
