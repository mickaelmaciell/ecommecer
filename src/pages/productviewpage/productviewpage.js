import React from "react";
import { useParams } from "react-router-dom";
import "./productviewpage.css"; // Certifique-se de criar o arquivo de estilos se necessário

function ProductViewPage() {
  const { id } = useParams(); // Obtém o ID do produto da URL

  // Exemplo de produtos que você pode carregar de um banco de dados ou API
  const products = [
    {
      id: "1",
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      image: "/assets/tenis-nike-red.png", // Altere para a imagem correta
      price: "R$ 219,00",
      oldPrice: "R$ 319,00",
      description:
        "Tênis confortável para corridas e uso diário. Feito com materiais reciclados para reduzir o impacto ambiental.",
      sizes: ["39", "40", "41", "42", "43"],
      colors: ["#FF0000", "#0000FF", "#00FF00"], // Vermelho, azul, verde
      rating: 4.7,
      stock: 100,
    },
  ];

  // Busca os detalhes do produto com base no ID
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <p>Produto não encontrado!</p>;
  }

  return (
    <div className="product-view-page">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <a href="/products">Produtos</a> / <a href="/products/shoes">Tênis</a> / <a href="/products/shoes/nike">Nike</a> /{" "}
        {product.name}
      </nav>

      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="rating">⭐ {product.rating} ({product.stock} disponíveis)</p>
          <p className="price">
            <span className="old-price">{product.oldPrice}</span> {product.price}
          </p>
          <p>{product.description}</p>
          <div className="sizes">
            <h3>Tamanho:</h3>
            {product.sizes.map((size) => (
              <button key={size} className="size-button">
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
          <button className="buy-button">Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default ProductViewPage;
