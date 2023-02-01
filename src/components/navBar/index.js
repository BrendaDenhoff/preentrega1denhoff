import React from "react";
import "./styles.css"
import CartWidget from "../CartWidget";

const NavBar = () => <nav className="nav">
<ul class="nav-list">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Categorias</a>
        <ul>
            <li><a href="#">Indumentaria</a></li>
            <li><a href="#">Calzado</a></li>
            <li><a href="#">Accesorios</a></li>
        </ul>
    </li>
    <li><a href="#">Acerca de</a>
        <ul>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Preguntas frecuentes</a></li>
        </ul>
    </li>
    <li><a href="#">Contacto</a></li>
    <CartWidget></CartWidget>
</ul>
</nav>

export default NavBar;