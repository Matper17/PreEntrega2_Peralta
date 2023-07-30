import Carrito from "./components/Carrtito";
//import { CartWidget } from "./components/CartWidget";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { Nosotros } from "./components/Nosotros";
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
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>

      
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
