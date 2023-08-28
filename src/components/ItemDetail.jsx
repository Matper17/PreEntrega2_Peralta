import { useContext, useState } from "react";
//import { toCapital } from "../helpers/toCapital"
import Counter from "./Counter"
import { CartContext } from "../context/CartContext";


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
            <img src={item.imagen} alt={item.marca} />
            <div>
                <h3 className="titulo">{item.marca}</h3>
                <p className="descripcion">{item.modelo}</p>
                <p className="precio">US${item.precio}</p>
                <Counter
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail 
