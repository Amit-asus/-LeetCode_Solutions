import { useEffect, useState } from "react";
import Card from "./components/Card";
// import './App.css'

function App() {
  let [products, setProducts] = useState([]);

  function getProducts() {
    const url = "https://dummyjson.com/products";
    fetch(url)
      .then((data) => data.json())
      .then((data) => setProducts(data.products))
      .catch(() => console.log("failed"));
  }

  useEffect(()=> {
    getProducts();
  } , [])

  return (
    <>
      {" "}
      <h1>Products</h1>
      <div id="main_container">
        {products.length > 0
          ? products.map((product) => {
              return <Card product={product} />;
            })
          : ""}
      </div>
    </>
  );
}

export default App;
