import { useEffect, useState } from "react";
import CountButton from "./components/CountButton/CountButton";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    }, 5000);
  }, []);

  console.log("re-rendered app");
  return (
    <div className="App">
      {products.length > 0 ? <SearchBar products={products} /> : "Loading..."}
      <CountButton incrementBy={3} buttonColor={"green"} />
    </div>
  );
}

export default App;
