import React from "react";
import "../styles/main.css";
import logo from "../img/header/logo.png";
import map from "../img/map/map.png";
import pin from "../img/map/pin.png";
import Header from '../components/Header';
import Content from '../components/Content';

const Footer = () => {
    return (
        <>
            <div className='offers__wrapper'>
                <div className='container'>

                    <div className='offers__title'>
                        ПАКЕТЫ УСЛУГ<span className='slash__title'>/</span>
                    </div>

                    <div className='offers__main'>

                        <div className='offers__item'>

                            <div className='item__header'>
                                Стандарт
                            </div>

                            <ul className='item__list'>
                                <li className='item__text'>Проживание на вилле 6 ночей </li>
                                <li className='item__text'>Номер категории стандарт</li>
                                <li className='item__text'>Экипировка для обучения</li>
                                <li className='item__text'>Обучение серфингу 5 тренировок по 2 часа</li>
                                <li className='item__text'>Страховка</li>
                                <li className='item__text'>Вечеринка с угощениями и дискотекой</li>
                            </ul>

                            <div className='item__price'>

                                <div className='item__number'>450</div>
                                <div className='item__currency'>$</div>

                            </div>

                        </div>



                        <div className='offers__item'>

                            <div className='item__header'>
                                Все включено
                            </div>

                            <ul className='item__list'>
                                <li className='item__text'>Проживание на вилле 6 ночей </li>
                                <li className='item__text'>Номер категории люкс</li>
                                <li className='item__text'>Экипировка для обучения</li>
                                <li className='item__text'>Обучение серфингу 8 тренировок по 2 часа</li>
                                <li className='item__text'>Страховка</li>
                                <li className='item__text'>Вечеринка с угощениями и дискотекой</li>
                                <li className='item__text'>Авиа перелет Тенерифе -Лансароте - Тенерифе </li>
                                <li className='item__text'>Завтраки на вилле</li>
                            </ul>

                            <div className='item__price'>

                                <div className='item__number'>950</div>
                                <div className='item__currency'>$</div>

                            </div>

                        </div>



                        <div className='offers__item'>

                            <div className='item__header'>
                                Профи
                            </div>

                            <ul className='item__list'>
                                <li className='item__text'>Проживание на вилле 8 ночей </li>
                                <li className='item__text'>Номер категории люкс</li>
                                <li className='item__text'>Экипировка для обучения</li>
                                <li className='item__text'>Обучение серфингу 16 тренировок по 2 часа</li>
                                <li className='item__text'>Страховка</li>
                                <li className='item__text'>Вечеринка с угощениями и дискотекой</li>
                                <li className='item__text'>Авиа перелет Тенерифе -Лансароте - Тенерифе </li>
                                <li className='item__text'>Завтраки и ужины на вилле</li>
                            </ul>

                            <div className='item__price'>

                                <div className='item__number'>1450</div>
                                <div className='item__currency'>$</div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='map__wrapper'>
                <img className='map__image' src={map} alt="" />
                <img className='pin__image' src={pin} alt="" />
            </div>

            <div className='container'>

                <div className='submit__wrapper'>

                    <div className='submit__title'>
                        ОСТАВИТЬ ЗАЯВКУ<span className='slash__title'>/</span>
                    </div>

                    <div className="submit__form">

                        <div className="submit__info-users">
                            <input className='input-users' type='text' placeholder='Имя'></input>
                            <input className='input-users' type='text' placeholder='Телефон'></input>
                            <textarea className='input-users' rows="5" cols="30" type='text'
                                placeholder='Оставьте сообщение, и мы &#10;свяжемся с Вами в ближайшее &#10;время'>
                            </textarea>

                            <div className="submit__send">
                                <button className='send-btn'>ОТПРАВИТЬ</button>
                            </div>

                        </div>


                        <div className='submit__info-support'>
                            <span className="info__text">
                                Есть вопрос? <br />
                                Вы можете связаться с нами:
                            </span>
                            <span className="info__text">
                                WhatsApp, Viber, Telegram <br />
                                +3 467 486-37-88
                            </span>
                            <span className="info__text">
                                Avenida grandes playas 79, <br />
                                Corralejo la Oliva Fuerteventura, <br />
                                Spain. 35660
                            </span>
                        </div>

                    </div>

                    <div className='social__media'>
                        <a href="" className="social__media-link">INSTAGRAM</a>
                        <a href="" className="social__media-link">FACEBOOK</a>
                        <a href="" className="social__media-link">YOUTUBE</a>
                    </div>

                </div>

            </div>


            <div className="footer">
                <img className='footer__image' src={logo} alt="logo" />
            </div>
        </>
    );
};

export default Footer;