import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};
