import "./styles.css";
import { Button } from "reactstrap";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  const increase = () => count < stock && setCount(count + 1);
  const decrease = () => count > initial && setCount(count - 1);

  return (
    <div className="cart-container">
      <Button onClick={decrease}>
        -
      </Button>
      <p>{count}</p>
      <Button onClick={increase}>
        +
      </Button>
      <Button
        disabled={stock === 0 && "disabled"}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;