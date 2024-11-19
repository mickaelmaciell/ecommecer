import React from 'react';
import './homepage.css'; // Certifique-se de que este arquivo existe e está no caminho correto.
import Section from '../../components/section/section';
import ProductListing from '../../components/productlisting/productlisting';

function HomePage() {
  return (
    <div className="homepage">
      <h1>Home Page</h1>
      <Section title="Produtos em Destaque">
        <ProductListing />
      </Section>
    </div>
  );
}

export default HomePage;
