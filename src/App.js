import Carrito from "./components/Carrito";
import CheckOut from "./components/CheckOut";
import Contacto from "./components/Contacto";
//import { CartWidget } from "./components/CartWidget";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import "./index.css"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (

      <CartProvider>
      <BrowserRouter>
      
      <Navbar/>

      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/productos" element={<ItemListContainer/>}/>
        <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
      </Routes>

      
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
