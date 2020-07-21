import React from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";

export const HomeHeader = () => {

    return (
        <header className='header'>

            <div className='header__user'>
                <Link to='/login' className='header__user-link'>Zaloguj</Link>
                <Link to='/register' className='header__user-link'>Załóż konto</Link>
            </div>

            <nav className="header__nav">
                <ul className="nav__list">
                    <li className="nav__list-el">
                        <ScrollLink activeClass="active" to="/" className="menu__list-link" spy={true} smooth={true}>Start</ScrollLink>
                    </li>
                    <li className="nav__list-el">
                        <ScrollLink activeClass="active" to="/simpleSteps" className="menu__list-link" spy={true} smooth={true}>O co chodzi?</ScrollLink>
                    </li>
                    <li className="nav__list-el">
                        <ScrollLink activeClass="active" to="/about" className="menu__list-link" spy={true} smooth={true}>O nas</ScrollLink>
                    </li>
                    <li className="nav__list-el">
                        <ScrollLink activeClass="active" to="/organizations" className="menu__list-link" spy={true} smooth={true}>Fundacja i organizacje</ScrollLink>
                    </li>
                    <li className="nav__list-el">
                        <ScrollLink activeClass="active" to="/contact" className="menu__list-link" spy={true} smooth={true}>Kontakt</ScrollLink>
                    </li>
                </ul>
            </nav>

        </header>
    );
}