import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import ProductsPage from "./pages/products-page";
import NotFoundPage from "./pages/not-found-page";
import ProductsDetails from "./pages/products-details-page";
import SuppliersPage from "./pages/suppliers-page";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/suppliers" element={<SuppliersPage/>} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
