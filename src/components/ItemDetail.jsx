import { useContext, useState } from "react"
import Counter from "./Counter"
import { CartContext } from "../context/CartContext";
//import { toCapital } from "../helpers/toCapital";

export const ItemDetail = ( {item} ) => {
  
  const { agregarAlCarrito } = useContext(CartContext);

  const [stock, setCantidad] = useState(1);

  const handleRestar = () => {
      stock > 1 && setCantidad(stock - 1)
  }

  const handleSumar = () => {
      stock < item.stock && setCantidad(stock + 1)
  }
  
  return (
    <div className="container">
        <div className="producto-detalle">
            <img src={item.imagen} alt={"Imagen no encontrada"} />
            <div>
                <h3 className="titulo"> {item.nombre} </h3>
                <p className="descripcion"> {item.desc} </p>
                  <p className="precio"> $ {item.precio} </p>
                <p className="descripcion"> Disponibles: {item.stock} </p>
                <p className="categoria">Categoría: {item.categoria}</p>
                <button type="button" className="agregar-al-carrito btn btn-secondary btn-sm">Add to cart</button>
                <Counter 
                stock={stock}
                handleSumar={handleSumar}
                handleRestar={handleRestar}
                handleAgregar={()=> {agregarAlCarrito (item, stock)}}/>
            </div>
        </div>
    </div>
  )
}

