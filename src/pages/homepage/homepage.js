import React, { useState } from "react";
import "./homepage.css";
import tenisNike from "../../assets/tenis-nike-red.png";

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      description:
        "Consequat culpa exercitation mollit nisi excepteur do duis tempor laboris eiusmod irure consectetur.",
      image: tenisNike,
    },
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="titulo-imagem">
        <div className="carousel-content">
          <p className="subtitle">Melhores ofertas personalizadas</p>
          <h2>Queima de <br/> estoque Nike 🔥</h2>
          <p>{slides[activeIndex].description}</p>
          <button>Ver Ofertas</button>
        </div>
        <div className="carousel-image">
          <img src={slides[activeIndex].image} alt="Tênis Nike" />
        </div>
      </div>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
