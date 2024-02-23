import React, { useState, useEffect } from "react";
import './Card.css';
import { Product } from "../../types/Product";

interface CardProps {
  item: Product,
  index: number,
  setProducts: Function;
}
const Card = ({ item, index, setProducts }: CardProps) => {
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    setProducts((prev: Product[]) => {
      const updateProduct = [...prev];
      updateProduct[index] = { ...prev[index], quantity: quantity };
      console.log(quantity)
      return updateProduct;
    });
  }, [index, quantity, setProducts])

  const changeQuantity = (quantity: number) => {
    setQuantity(prev => Math.max(0, prev + quantity));
  }


  return (

    <div className="card col-4" style={{ width: "18rem" }}>
      <img
        src={item.image}
        className="card-img-top"
        alt={"card"}
      />
      <div className="card-body">
        <div className="cardHead">
          <h5 className="card-title truncate">{item.title}</h5>
        </div>
        <p className="card-text truncate">
          {item.description}
        </p>
        <div className="button-cont">
          <div className="buttons">
            <button className="add btn btn-success" onClick={() => changeQuantity(+1)}>Add to cart</button>
            <button className="remove btn btn-danger" onClick={() => changeQuantity(-1)}>Remove</button>
            <div className="quantity mx-2">{quantity}</div>
          </div>
          <p className="price">{`${item.price} €`}</p>
        </div>
      </div>
    </div>

  );
};

export default Card;
