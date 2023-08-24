import { Item } from "./Item"
//import { toCapital } from "../helpers/toCapital"


export const ItemList = ({productos, marca}) => {
  
    return (
    <div className="container">
        <h2 className="main-title">{marca}</h2>

        <div className="productos">
            {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
        </div>

    </div>
  )
}
