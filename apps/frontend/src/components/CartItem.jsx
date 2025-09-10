import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <input
        type="number"
        value={item.quantity}
        min="1"
        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
      />
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
