import React from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink, animateScroll as scroll} from "react-scroll";

export const HomeHeader = () => {

    return (
        <header className='header' id='header'>

            <div className='header__user'>
                <Link to='/login' className='header__user-link'>Zaloguj</Link>
                <Link to='/register' className='header__user-link'>Załóż konto</Link>
            </div>

            <nav className="header__nav">
                <ul className="nav__list">
                    <li className="nav__list-el">
                        <ScrollLink activeClass="active" to='header' className="menu__list-link" spy={true} smooth={true} duration={1000} onClick={() => scroll.scrollToTop()}>Start</ScrollLink>
                    </li>
                    <li className="nav__list-el">
                        <ScrollLink activeClass="active" to="simpleSteps" className="menu__list-link" spy={true} smooth={true} duration={1000}>O co chodzi?</ScrollLink>
                    </li>
                    <li className="nav__list-el">
                        <ScrollLink activeClass="active" to="about" className="menu__list-link" spy={true} smooth={true} duration={1000}>O nas</ScrollLink>
                    </li>
                    <li className="nav__list-el">
                        <ScrollLink activeClass="active" to="organizations" className="menu__list-link" spy={true} smooth={true} duration={1000}>Fundacja i organizacje</ScrollLink>
                    </li>
                    <li className="nav__list-el">
                        <ScrollLink activeClass="active" to="contact" className="menu__list-link" spy={true} smooth={true} duration={1000}>Kontakt</ScrollLink>
                    </li>
                </ul>
            </nav>

        </header>
    );
}