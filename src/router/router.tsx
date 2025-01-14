import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../layouts/Header";
import ProductView from "../Views/ProductsView";
import ProductDetail from "../components/ProductDetail";
import '../index.css'
import {CartProvider} from "../context/cartContext";

const Router = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductView />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default Router
