import React from 'react';
import "./styles/main.css";
import logo from "./img/header/logo.png";
import accommodation from "./img/school/accommodation.png";
import fly from "./img/school/fly.png";
import education from "./img/school/education.png";
import percent__85 from "./img/school/percent85.png";
import percent__95 from "./img/school/percent95.png";
import percent__99 from "./img/school/percent99.png";
import staff from "./img/staff/staff.png";
import gallery1 from "./img/gallery/gallery1.png";
import gallery2 from "./img/gallery/gallery2.png";
import gallery3 from "./img/gallery/gallery3.png";
import gallery4 from "./img/gallery/gallery4.png";
import gallery5 from "./img/gallery/gallery5.png";
import gallery6 from "./img/gallery/gallery6.png";
import surf from "./img/surf/surf.png";
import polygon from "./img/surf/polygon.png";
import blog from "./img/blog/blog.png";
import instructor1 from "./img/team/instructor1.png";
import instructor2 from "./img/team/instructor2.png";
import instructor3 from "./img/team/instructor3.png";
import map from "./img/map/map.png";
import pin from "./img/map/pin.png";




function App() {
  return (
    <div className="App">

      <body>

        <div className='main__image'>

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
        </div>

        <div className='main__wrapper'>
          <div className='container'>

            <div className='main__title'>
              О  ШКОЛЕ, О СЕРФИНГЕ, О КАНАРАХ<span className='slash__title'>/</span>
            </div>

            <div className='main__subtitle'>
              <div className='left__subtitle'>

                <span className='subtitle__text'>
                  Канарские острова не случайно называют европейскими Гавайями –
                  это идеальное место для поклонников серфинга: стабильный теплый ветер круглый год,
                  песчаные пляжи, километры нетронутых просторов и прозрачное море.
                  А настоящей Меккой для серфингистов становится Фуэртевентура –
                  второй по величине остров архипелага.
                </span>

                <span className='subtitle__text'>
                  Именно здесь лучшее в Испании место, в котором можно пройти обучение серфингу.
                  Кроме того, что зимой и осенью сюда приходят огромные атлантические волны,
                  Фуэртевентура может похвастать и множеством мелководных спокойных лагун,
                  отлично подходящих для обучения начинающих серфингистов.
                </span>

                <span className='subtitle__text'>
                  Серфинг на Канарских островах доступен круглый год – и волны, и подходящая погода
                  здесь есть всегда. Причем волну, подходящую по уровню, сможет найти и настоящий профи,
                  и новичок. Не случайно считается, что именно это место лучше всего подойдет для
                  обучения здесь возможно без сложностей переходить на новый уровень.
                </span>

                <span className='subtitle__text'>
                  Перечисляя достоинства, нельзя обойти и то, что пляжи Фуэртевентуры самые
                  протяженные на Канарах. В итоге невозможно представить их переполненных туристами.
                  Вы столкнетесь только с теми, кого,как и вас, будет интересовать одна цель –
                  обучение серфингу.
                </span>

              </div>

              <div className='right__subtitle'>

                <span className='subtitle__text'>
                  Пока что вы только хотите понять, что такое серфинг,
                  или уже испытали всю прелесть катания на волнах, но желаете поднять свой уровень?
                  Наша школа серфинга сможет предложить обучение для любого уровня подготовки.
                </span>

                <span className='subtitle__text'>
                  Четыре часа увлекательных занятий в день помогут вам
                  уверенно покорять волны, почувствовать себя настоящим серфингистом.
                </span>

                <span className='subtitle__text'>
                  Основные достоинства нашей русской школы –
                  высокое качество преподавания и организации занятий, безопасность
                  (все наши клиенты застрахованы в компании Allianz), отличный инвентарь и экипировка
                  (предоставляется на весь курс обучения), в том числе мягкие безопасные доски
                  для начинающих.
                </span>

                <span className='subtitle__text'>
                  Сначала мы определяем уровень катания и физической подготовки и только потом
                  составляем программу подготовки. И можем заверить, что после того,
                  как закончится обучение, вы не только получите массу великолепных ощущений,
                  но и это уровень поднимется на новую ступень.
                </span>

              </div>
            </div>
          </div>

        </div>

        <div className='school__wrapper'>
          <div className='container'>
            <div className='school__title'>
              В  ШКОЛЕ ВЫ ПОЛУЧИТЕ<span className='slash__title'>/</span>
            </div>

            <div className='school__main-item'>

              <div className='item__main'>

                <div className='item__header'>
                  <img src={accommodation} alt="image" />
                  <span className='item__header-text'>ПРОЖИВАНИЕ</span>
                </div>

                <div className='item__about'>
                  Наша школа серфинга находится в 100 м от океанского побережья.
                  К услугам гостей открытый бассейн и бесплатный Wi-Fi.
                  Из верхней террасы открывается вид на океан. Расстояние до центра города 15 мин.
                </div>

              </div>


              <div className='item__main'>

                <div className='item__header'>

                  <img src={fly} alt="image" />
                  <span className='item__header-text'>
                    ПЕРЕЛЕТ И <br />СТРАХОВКУ
                  </span>

                </div>

                <div className='item__about'>
                  Все участники программы застрахованы страховой компанией Allianz. <br />
                  Перелет из Тенерифе до острова Лансароте  и обратно входит в стоимость программы
                </div>

              </div>


              <div className='item__main'>

                <div className='item__header'>
                  <img src={education} alt="image" />

                  <span className='item__header-text'>
                    ОБУЧЕНИЕ И <br />ЭКИПИРОВКУ
                  </span>

                </div>

                <div className='item__about'>
                  Все оборудование и экипировка известных производителей и предоставляется на весь
                  курс программы. Тренировочный процесс начинается с определения вашего уровня катания
                </div>

              </div>

            </div>


            <div className='school__second-item'>

              <div className='school__statistics'>

                <div className='school__statistics-item'>
                  <img src={percent__85} alt="image" />
                  <span className='percentage'>85% <br /></span>
                  <span className='statistics__item-text'> Приехали второй раз</span>
                </div>

                <div className='school__statistics-item'>
                  <img src={percent__95} alt="image" />
                  <span className='percentage'>95% <br /></span>
                  <span className='statistics__item-text'>Научились кататься</span>
                </div>

                <div className='school__statistics-item'>
                  <img src={percent__99} alt="image" />
                  <span className='percentage'>99% <br /></span>
                  <span className='statistics__item-text'>Довольных клиентов</span>
                </div>

              </div>

              <div className='school__metodic'>

                <span className='school__metodic-text'>
                  Огромным преимуществом нашей школы является собственная методика обучения.
                  Мы разработали собственный стиль обучения серфингу, который позволяет новичкам
                  максимально быстро встать на доску.
                </span>

                <span className='school__metodic-text'>
                  Именно наша методика и наши преподаватели позволили нам пройти аттестацию
                  Федерации серфинга Канарских островов - FEDERACIÓN CANARIA DE SURF.
                  Это означает, что наша школа соответствует всем мировым стандартам.
                  Переаттестация производится ежегодно и это позволяет нам всегда стремиться
                  к улучшению обучения.
                </span>
              </div>

            </div>
          </div>
        </div>

        <div className='staff__wrapper'>
          <div className='container'>

            <div className='staff__main'>

              <div className='staff__title'>
                ПОКОРЯЙ ВЕРШИНЫ<span className='slash__title'>/</span>
              </div>

              <div className='staff__subtitle'>

                <span className='staff__text'>
                  Преподаватели нашей школы серфинга в числе лучших серферов на Канарских островах.
                  Среди них - чемпион Европы по лонгборду, который с радостью поделится опытом как
                  с новичками, так и более опытными серферами.
                  Все члены преподавательского состава являются сертифицированными членами
                  Федерации серфинга Канарских островов. Некоторые из них знают русский язык,
                  что определенно позиционирует нас как русскую школу серфинга за границей!
                </span>

                <span className='staff__text'>
                  Весь тренерский состав регулярно участвует в семинарах и курсах
                  повышения квалификации, которые проводятся по всему миру различными
                  известными серф-клубами и федерациями. Поэтому в нашей школе серфинга вы можете
                  быть спокойны: вас обучают лучшие тренеры!
                </span>

                <span className='staff__text'>
                  Методика обучения серфингу рассчитана как на новичков, на серферов среднего уровня,
                  так и на серферов уровня ТОП. Тренеры находят подход к каждому, несмотря на то,
                  что обучение серфингу в нашей школе производится в группах. Однако, мы предлагаем
                  персональные уроки серфинга - только вы и тренер!
                </span>

              </div>

              <img className='staff__image' src={staff} alt="image" />
            </div>



          </div>
        </div>

        <div className='gallery__wrapper'>
          <div className='container'>

            <div className='gallery__title'>
              ГАЛЕРЕЯ<span className='slash__title'>/</span>
            </div>

            <nav className='gallery__nav'>
              <a href="#" className="gallery__links">ВСЕ</a>
              <a href="#" className="gallery__links">ТУРИСТЫ</a>
              <a href="#" className="gallery__links">ПРИРОДА</a>
              <a href="#" className="gallery__links">ПРОФИ</a>
            </nav>



            <div className='gallery__photo'>
              <div className='gallery__items'>
                <img className='second__item' src={gallery1} alt="" />
                <img className='second__item' src={gallery2} alt="" />
                <img className='second__item' src={gallery3} alt="" />
                <img className='second__item' src={gallery4} alt="" />
                <img className='second__item' src={gallery5} alt="" />
                <img className='second__item' src={gallery6} alt="" />

              </div>
            </div>

            <div className='gallery__show-more'>
              <button className='show__more-btn'>ПОКАЗАТЬ ЕЩЁ</button>
            </div>



          </div>
        </div>

        <div className='citation__wrapper'>
          <div className='container'>

            <div className='citation__main'>

              <div className='citation__title'>
                «Если сомневаешься – иди катайся.»
              </div>

              <div className='citation__author'>
                Нэт Янг, первый Чемпион Мира по сёрфингу
              </div>

            </div>
          </div>
        </div>

        <div className='container'>

          <div className='surf__wrapper'>

            <img className='surf__image' src={surf} alt="" />
            <img className='polygon__image' src={polygon} alt="" />

          </div>

          <div className='indicators__wrapper'>

            <div className='indicators__item'>
              <div className='indicators__header'>450</div>
              <span className='indicators__text'>туристов</span>
            </div>

            <div className='indicators__item'>
              <div className='indicators__header'>2500</div>
              <span className='indicators__text'>часов катания</span>
            </div>

            <div className='indicators__item'>
              <div className='indicators__header'>10</div>
              <span className='indicators__text'>проф. тренеров</span>
            </div>

            <div className='indicators__item'>
              <div className='indicators__header'>365</div>
              <span className='indicators__text'>дней в году</span>
            </div>

          </div>
        </div>

        <div className='blog__wrapper'>

          <div className='blog__title'>
            БЛОГ<span className='slash__title'>/</span>
          </div>


          <div className='blog__main'>
            <img className='blog__image' src={blog} alt="blog" />

            <span className='blog__main-text'>
              ЧТО НЕОБХОДИМО ВЗЯТЬ С СОБОЙ НА СЕРФ ТУР
              <span className='blog__second-text'>
                ТОП 20 необходимых вещей для комфортного отдыха и обучения
              </span>
            </span>

          </div>

        </div>


        <div className='container'>

          <div className='team__wrapper'>


            <div className='team__title'>
              НАША КОМАНДА<span className='slash__title'>/</span>
            </div>


            <div className='instructor__wrapper'>

              <div className='instructor__item'>

                <img className='instructor__img' src={instructor1} alt="instructor" />

                <div className='instructor__name'>
                  Mike
                </div>

                <div className='instructor__position'>
                  Главный инструктор
                </div>
              </div>

              <div className='instructor__item'>

                <img className='instructor__img' src={instructor2} alt="instructor" />

                <div className='instructor__name'>
                  Mary
                </div>

                <div className='instructor__position'>
                  инструктор
                </div>
              </div>

              <div className='instructor__item'>

                <img className='instructor__img' src={instructor3} alt="instructor" />

                <div className='instructor__name'>
                  Olga
                </div>

                <div className='instructor__position'>
                  инструктор
                </div>
              </div>

            </div>

          </div>
        </div>

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
      </body>
    </div>
  );
}

export default App;
