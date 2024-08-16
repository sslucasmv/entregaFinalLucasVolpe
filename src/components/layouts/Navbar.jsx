import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../common/CartWidget";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-center">
                <div className="logo">
                    <NavLink to="/react-shop" className="link-logo">
                        <img src="https://i.ibb.co/7Gjg8NB/logourbanshop.png" alt="logo" />
                        <div className="logo-title">
                            <span className="color-logo1">URBAN</span>
                            <span className="color-logo2">SHOP</span>
                        </div>
                    </NavLink>
                </div>
                <ul className="navigation">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/productos">Todos</NavLink></li>
                    {/* <li><NavLink to="/category/deportivas">Deportivas</NavLink></li>
                    <li><NavLink to="/category/running">Running</NavLink></li>
                    <li><NavLink to="/category/urbanas">Urbanas</NavLink></li> */}
                </ul>
                <div className="card-widget">
                    <div className="icon-avatar">
                     
                    </div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
