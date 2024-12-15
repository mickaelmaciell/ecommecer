import React from "react";
import "./featuredcollections.css";
import supremeImage from "../../assets/supreme.png";
import adidasImage from "../../assets/tenis-black-white.png";
import beatsImage from "../../assets/fone-black.png";


import camisaImage from "../../assets/colecao-camisa.png";
import calcaImage from "../../assets/colecao-calça.png";
import boneImage from "../../assets/colecao-bone.png";
import headphonesImage from "../../assets/colecao-headphones.png";
import tenisImage from "../../assets/colecao-tenis.png";

function FeaturedCollections() {
  return (
    <div className="featured-collections">
      <h2>Coleções em destaque</h2>
      <div className="collections-row">
        {/* CARD 1 */}
        <div className="collection-card">
          <span className="discount-tag">30% OFF</span>
          <img src={supremeImage} alt="Supreme" />
          <h3>Novo drop Supreme</h3>
          <button>Comprar</button>
        </div>

        {/* CARD 2 */}
        <div className="collection-card">
          <span className="discount-tag">30% OFF</span>
          <img src={adidasImage} alt="Adidas" />
          <h3>Coleção Adidas</h3>
          <button>Comprar</button>
        </div>

        {/* CARD 3 */}
        <div className="collection-card">
          <span className="discount-tag">30% OFF</span>
          <img src={beatsImage} alt="Beats Bass" />
          <h3>Novo Beats Bass</h3>
          <button>Comprar</button>
        </div>
      </div>

      {/* CATEGORIAS */}
      <h2>Categorias</h2>
      <div className="categories-row">
        <div className="category-item">
          <img src={camisaImage} alt="Camisetas" />
          <p>Camisetas</p>
        </div>
        <div className="category-item">
          <img src={calcaImage} alt="Calças" />
          <p>Calças</p>
        </div>
        <div className="category-item">
          <img src={boneImage} alt="Bonés" />
          <p>Bonés</p>
        </div>
        <div className="category-item">
          <img src={headphonesImage} alt="Headphones" />
          <p>Headphones</p>
        </div>
        <div className="category-item">
          <img src={tenisImage} alt="Tênis" />
          <p>Tênis</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCollections;
