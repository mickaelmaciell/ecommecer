import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/homepage/homepage";
import ProductListingPage from "./pages/productlistingpage/productlistingpage";
import ProductViewPage from "./pages/productviewpage/productviewpage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main style={{ minHeight: '80vh', padding: '0', margin: '0' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/product/:id" element={<ProductViewPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
