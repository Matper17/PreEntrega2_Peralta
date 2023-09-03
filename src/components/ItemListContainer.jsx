import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const [id] = useState("Productos");

    const categoria = useParams().categoria;

    useEffect(() => {
      const productosRef = collection(db, "Productos");
      let q;
    
      if (categoria) {
        q = query(productosRef, where("categoria", "==", categoria));
      } else {
        q = productosRef; // Sin filtro de categoría
      }
    
      getDocs(q)
        .then((resp) => {
          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            })
          );
        })
        .catch((error) => {
          console.error("Error al obtener productos:", error);
        });
    }, [categoria]);
     
  return (
    <div>
        <ItemList productos={productos} titulo={id} />
    </div>
  )
}

export default ItemListContainer