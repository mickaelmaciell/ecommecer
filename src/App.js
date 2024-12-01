import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/homepage/homepage";
import Login from "./components/login/login"; // Importe o componente Login
import Register from "./components/register/register"; // Importe o componente Register
import ProductListingPage from "./pages/productlistingpage/productlistingpage";
import ProductViewPage from "./pages/productviewpage/productviewpage";
import Recover from "./components/recover/recover";
import Form from "./components/form/form"; // Importe o componente Form

function App() {
  // Função para decidir a classe de layout
  const LayoutWrapper = ({ children }) => {
    const location = useLocation();
    const authRoutes = ["/login", "/register", "/recover", "/form"]; // Rotas com estilo exclusivo

    // Adiciona uma classe CSS específica para login/registro
    const className = authRoutes.includes(location.pathname) ? "auth-layout" : "main-layout";

    return <div className={className}>{children}</div>;
  };

  // Função para decidir se o Header será exibido
  const ShowHeader = () => {
    const location = useLocation();
    const noHeaderRoutes = ["/login", "/register", "/recover", "/form"]; // Rotas onde o Header NÃO deve aparecer

    if (noHeaderRoutes.includes(location.pathname)) {
      return null;
    }

    return <Header />;
  };

  return (
    <Router>
      <LayoutWrapper>
        <ShowHeader /> {/* Decide se o Header será exibido */}
        <main style={{ minHeight: "80vh", padding: "0", margin: "0" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/product/:id" element={<ProductViewPage />} />
            <Route path="/recover" element={<Recover />} /> {/* Adicionada rota de recuperação */}
            <Route path="/form" element={<Form />} /> {/* Adicionada rota para o formulário */}
          </Routes>
        </main>
        <Footer />
      </LayoutWrapper>
    </Router>
  );
}

export default App;
