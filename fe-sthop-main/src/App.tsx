import React, { useEffect, useState } from "react";
import { Product } from "./types/Product";
import "./App.css";
import Card from "./components/Card/Card";
import Navbar from "./components/NavBar/navbar";
import Cart from "./components/Cart/cart";

function App() {

  const [products, setProducts] = useState<Product[]>([])
  const cards = Array.from({ length: 20 });
  const [quantity, setQuantity] = useState<number>(0);
  const [totQuantity, setTotQuantity] = useState<number>(0);
  const [totPrice, setTotPrice] = useState<number>(0);




  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
      const data = await response.json();
      console.log(data);
      setProducts([...data].map(product => ({ ...product, quantity: 0 })))
    }

    
    
    fetchData();
  }, []);
  
  useEffect(() => {
    setTotQuantity(products.reduce((acc, product) => acc + product.quantity, 0))
    setTotPrice(products.reduce((acc, product) => acc + product.price * product.quantity, 0));
  },[products]);

  return (
    <>
    <Navbar totQuantity={totQuantity} totPrice={totPrice} />
      <div className="container-fluid">
        <h1 className="text-center">My Shop</h1>
        <div className="row">
          {products.map((product, index) => (
            <Card item={product} index={index} setProducts={setProducts} />
          ))}
        </div>
      </div>
    </>

  );
}

export default App;
