import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import ContactUs from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
