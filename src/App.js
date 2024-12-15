import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import ProductListingPage from "./pages/productlistingpage/productlistingpage";
import ProductViewPage from "./pages/productviewpage/productviewpage";
import Recover from "./components/recover/recover";
import Form from "./components/form/form";
import CheckoutPage from "./pages/checkoutpage/checkoutpage";
import FinalizePurchase from "./components/finalizepurchase/finalizepurchase";
import OrderSuccess from "./components/ordersuccess/ordersuccess";
import Profile from "./components/profile/profile"; 

function App() {
  const LayoutWrapper = ({ children }) => {
    const location = useLocation();
    const authRoutes = ["/login", "/register", "/recover", "/form"];
    const className = authRoutes.includes(location.pathname) ? "auth-layout" : "main-layout";
    return <div className={className}>{children}</div>;
  };

  const ShowHeader = () => {
    const location = useLocation();
    const noHeaderRoutes = ["/login", "/register", "/recover", "/form"];
    if (noHeaderRoutes.includes(location.pathname)) {
      return null;
    }
    return <Header />;
  };

  return (
    <Router>
      <LayoutWrapper>
        <ShowHeader />
        <main style={{ minHeight: "80vh", padding: "0", margin: "0" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/product/:id" element={<ProductViewPage />} />
            <Route path="/checkoutpage" element={<CheckoutPage />} />
            <Route path="/recover" element={<Recover />} />
            <Route path="/form" element={<Form />} />
            <Route path="/finalizepurchase" element={<FinalizePurchase />} />
            <Route path="/success" element={<OrderSuccess />} />
            <Route path="/profile/*" element={<Profile />} /> {}
          </Routes>
        </main>
        <Footer />
      </LayoutWrapper>
    </Router>
  );
}

export default App;
