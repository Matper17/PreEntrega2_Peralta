//import { useContext, useState } from "react"
import Counter from "./Counter"
//import { CartWidget } from "./CartWidget";


export const ItemDetail = ({item}) => {
  
  /*const { carrito, agregarAlCarrito } = useContext (CartWidget);
  const [cantidad, setCantidad] = useState(1); 
  const handleAdd = () =>{
    cantidad < item.cantidad && setCantidad (cantidad + 1)
  }*/
  
  return (
    <div className="container">
        <div className="producto-detalle">
            <img src={item.imagen} alt={item.titulo} />
            <div>
                <h3 className="titulo"> {item.nombre} </h3>
                <p className="descripcion"> {item.desc} </p>
                <p className="descripcion"> {item.marca} </p>
                <p className="descripcion"> {item.modelo} </p>
                <p className="descripcion"> ${item.precio} </p>
                <p className="descripcion"> Disponibles: {item.cantidad} </p>
                <button type="button" className="agregar-al-carrito btn btn-secondary btn-sm">Add to cart</button>
                <Counter/>
            </div>
        </div>
    </div>
  )
}

/*cantidad={cantidad}
  handleAdd={() => { agregarAlCarrito(item, cantidad) }}*
/*export const ItemDetail = ( {item} ) => {

  const { carrito, agregarAlCarrito } = useContext(CartWidget);
  console.log(carrito);

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
          <img src={item.imagen} alt={item.titulo} />
          <div>
              <h3 className="titulo">{item.titulo}</h3>
              <p className="descripcion">{item.descripcion}</p>
              <p className="categoria">Categoría: </p>
              <p className="precio">${item.precio}</p>
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
}*/


