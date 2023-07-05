

export const ItemDetail = ({item}) => {
  return (
    <div className="container">
        <div className="producto-detalle">
            <img src={item.imagen} alt={item.titulo} />
            <div>
                <h3 className="titulo"> {item.nombre} </h3>
                <p className="descripcion"> {item.desc} </p>
                <p className="descripcion"> {item.marca} </p>
                <p className="descripcion"> ${item.precio} </p>
            </div>
        </div>
    </div>
  )
}
