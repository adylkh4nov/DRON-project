import React from 'react';
import './header.scss'


const Header = ({Func}) => {

    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <a href="#" className="navbar-logo">DRONES</a>
                    <div className="navbar-wrap">
                        <ul className="navbar-menu">
                            <li><a  onClick={() => Func("main-block")}
                                    href="#">Главное</a></li>
                            <li><a onClick={() => Func("about-block")}
                                   href="#">О нас</a></li>
                            <li><a onClick={() => Func("price-block")}
                                   href="#">Цены</a></li>
                            <li><a onClick={() => Func("contacts-block")}
                                   href="#">Контакты</a></li>
                        </ul>

                        <a href="src/Components/Header/Header#" className="callback">Обратный звонок</a>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;