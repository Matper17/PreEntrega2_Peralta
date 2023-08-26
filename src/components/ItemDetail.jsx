import { useContext, useState } from "react"
import Counter from "./Counter"
import { CartContext } from "../context/CartContext";
//import { toCapital } from "../helpers/toCapital";

const ItemDetail = ( {item} ) => {
  
  const { agregarAlCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
      cantidad < item.stock && setCantidad(cantidad + 1)
  }
  
  return (
    <div className="container">
        <div className="producto-detalle">
        <img src= {item.imagen} alt="Imagen no encontrada"/>
          <div>
            <h3 className="categoria">{item.categoria}</h3>
            <p className="titulo"> {item.marca}</p>
            <p className="precio"> ${item.precio}</p>
            <Counter 
                cantidad={cantidad}
                handleSumar={handleSumar}
                handleRestar={handleRestar}
                handleAgregar={()=> {agregarAlCarrito (item, cantidad)}}/>
            </div>
        </div>
    </div>
  )
}
export default ItemDetail; 
