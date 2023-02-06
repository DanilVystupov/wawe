import React from "react";
import "../styles/main.css";
import logo from "../img/header/logo.png";

const Header = () => {

    return (

        <div className='main__image' >
            <div className='container'>
                <header className="header">
                    <div className="header__wrapper">

                        <div className="header__block">
                            <img src={logo} alt="Logo" />
                        </div>

                        <nav className="header__nav">
                            <a href="#" className="nav__links">О нас</a>
                            <a href="#" className="nav__links">Услуги</a>
                            <a href="#" className="nav__links">Стоимость</a>
                            <a href="#" className="nav__links">Блог</a>
                            <a href="#" className="nav__links">Команда</a>
                            <a href="#" className="nav__links">Контакты</a>
                        </nav>


                    </div>

                    <div className='header__text'>
                        <div className='header__title'>
                            WAWE
                        </div>

                        <div className='header__subtitle'>
                            Школа серфинга на канарских Островах
                        </div>

                    </div>
                </header>
            </div>
        </div >

    );
};

export default Header;