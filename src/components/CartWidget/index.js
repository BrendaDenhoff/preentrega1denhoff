import React from "react";
import "./styles.css"
import carrito from "./carrito.png"


const CartWidget = () => <div className="cartWidget">
    <img src={carrito}></img>
    <h4 className="cartWidget-numero">1</h4>
</div>

export default CartWidget;