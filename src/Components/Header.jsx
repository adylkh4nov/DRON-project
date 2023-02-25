import React from 'react';
import '../styles/header.scss'
const Header = (props) => {

    const setScroll = (scroll) => {
        props.setCurrentScroll(scroll);
    }
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <a href="#" className="navbar-logo">DRONS</a>
                    <div className="navbar-wrap">
                        <ul className="navbar-menu">
                            <li><a onClick={() => setScroll("main")}
                                href="#">Главное</a></li>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Цены</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>

                        <a href="#" className="callback">Обратный звонок</a>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;