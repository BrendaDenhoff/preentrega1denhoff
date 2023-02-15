import React from "react";
import "./styles.css"
import CartWidget from "../CartWidget";
import { NavLink} from "react-router-dom";

const NavBar = () => <nav className="nav">
<ul className="nav-list">
    <NavLink to="/">
        <li className="nav-list-li"><a href="#">Inicio</a></li>
    </NavLink>
    <li><a href="#">Categorias</a>
        <ul>
        <NavLink className="nav-link" to="category/Indumentaria">
            <li><a href="#">Indumentaria</a></li>
        </NavLink>
        <NavLink className="nav-link" to="category/Calzado">
            <li><a href="#">Calzado</a></li>
        </NavLink>
        <NavLink className="nav-link" to="category/Accesorio">
            <li><a href="#">Accesorios</a></li>
        </NavLink>
        </ul>
    </li>
    <li><a href="#">Acerca de</a>
        <ul>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Preguntas frecuentes</a></li>
        </ul>
    </li>
    <li><a href="#">Contacto</a></li>
</ul>
<CartWidget></CartWidget>
</nav>

export default NavBar;