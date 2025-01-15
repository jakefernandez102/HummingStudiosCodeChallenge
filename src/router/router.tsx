import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../layouts/Header";
import ProductView from "../Views/ProductsView";
import '../index.css'
import {CartProvider} from "../context/cartContext";
import ProductDetailsView from "../Views/ProductDetailsView";

const Router = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductView />} />
          <Route path="/products/:id" element={<ProductDetailsView />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default Router
