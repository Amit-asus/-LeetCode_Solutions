import React from 'react'
import "./Card.css"


const Card = ({product}) => {
  return (
    <div id={product.id} className="container">
      <img className="image" src={product.images[0]} alt="" />
      <h4>{product.title}</h4>
      <h4>{product.price}</h4>
    </div>
  );
}

export default Card