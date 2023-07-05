import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
        <Navbar/>
        {/*<ItemListContainer/>*/}
        <ItemDetailContainer id={2}/>
    </div>
  );
}

export default App;
