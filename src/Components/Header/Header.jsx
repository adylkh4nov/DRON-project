import React from 'react';
import './header.scss'

const Header = (props) => {

    const setScroll = (scroll) => {
        props.setCurrentScroll(scroll);
    }
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <a href="src/Components/Header/Header#" className="navbar-logo">DRONS</a>
                    <div className="navbar-wrap">
                        <ul className="navbar-menu">
                            <li><a onClick={() => setScroll("main")}
                                href="#">Главное</a></li>
                            <li><a onClick={() => setScroll("about")}
                                href="#">О нас</a></li>
                            <li><a href="#">Цены</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>

                        <a href="src/Components/Header/Header#" className="callback">Обратный звонок</a>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;